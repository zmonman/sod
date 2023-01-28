package deathknight

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
)

func (dk *Deathknight) registerDeathPactSpell() {
	actionID := core.ActionID{SpellID: 48743}
	cdTimer := dk.NewTimer()
	cd := time.Minute * 2

	hpMetrics := dk.NewHealthMetrics(actionID)

	dk.DeathPact = dk.RegisterSpell(core.SpellConfig{
		ActionID: actionID,
		Flags:    core.SpellFlagNoOnCastComplete,

		RuneCost: core.RuneCostOptions{
			RunicPowerCost: 40,
		},
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: core.GCDDefault,
			},
			CD: core.Cooldown{
				Timer:    cdTimer,
				Duration: cd,
			},
		},
		ExtraCastCondition: func(sim *core.Simulation, target *core.Unit) bool {
			return dk.Ghoul.Pet.IsEnabled()
		},
		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			healthGain := 0.4 * dk.Ghoul.MaxHealth()
			dk.GainHealth(sim, healthGain, hpMetrics)
			dk.Ghoul.Pet.Disable(sim)
		},
	})

	if !dk.Inputs.IsDps {
		dk.AddMajorCooldown(core.MajorCooldown{
			Spell: dk.DeathPact,
			Type:  core.CooldownTypeSurvival,
			CanActivate: func(sim *core.Simulation, character *core.Character) bool {
				return dk.DeathPact.CanCast(sim, nil)
			},
		})
	}
}
