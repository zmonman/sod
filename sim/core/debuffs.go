package core

import (
	"strconv"
	"time"

	"github.com/wowsims/wotlk/sim/core/proto"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func applyDebuffEffects(target *Unit, debuffs proto.Debuffs) {
	if debuffs.Misery {
		MakePermanent(MiseryAura(target))
	}

	if debuffs.JudgementOfWisdom {
		MakePermanent(JudgementOfWisdomAura(target))
	}
	if debuffs.JudgementOfLight {
		MakePermanent(JudgementOfLightAura(target))
	}

	if debuffs.CurseOfElements {
		MakePermanent(CurseOfElementsAura(target))
	}
	if debuffs.EbonPlaguebringer {
		MakePermanent(EbonPlaguebringerAura(target))
	}
	if debuffs.EarthAndMoon {
		MakePermanent(EarthAndMoonAura(target))
	}

	if debuffs.ShadowMastery {
		MakePermanent(ShadowMasteryAura(target))
	}

	if debuffs.ImprovedScorch {
		MakePermanent(ImprovedScorchAura(target))
	}

	if debuffs.WintersChill {
		MakePermanent(WintersChillAura(target, 5))
	}

	if debuffs.BloodFrenzy {
		MakePermanent(BloodFrenzyAura(target, 2))
	}
	if debuffs.SavageCombat {
		MakePermanent(SavageCombatAura(target, 2))
	}

	if debuffs.GiftOfArthas {
		MakePermanent(GiftOfArthasAura(target))
	}

	if debuffs.Mangle {
		MakePermanent(MangleAura(target))
	}

	if debuffs.ExposeArmor {
		exposeArmorAura := ExposeArmorAura(target, false) // TODO: check glyph
		ScheduledAura(exposeArmorAura, false, PeriodicActionOptions{
			Period:   time.Duration(10.0 * float64(time.Second)),
			NumTicks: 1,
			OnAction: func(sim *Simulation) {
				exposeArmorAura.Activate(sim)
			},
		})
	}

	if debuffs.CurseOfWeakness != proto.TristateEffect_TristateEffectMissing {
		MakePermanent(CurseOfWeaknessAura(target, 2))
	}

	if debuffs.SunderArmor {
		sunderArmorAura := SunderArmorAura(target, 1)
		ScheduledAura(sunderArmorAura, true, PeriodicActionOptions{
			Period:   time.Duration(1.5 * float64(time.Second)),
			NumTicks: 4,
			Priority: ActionPriorityDOT, // High prio so it comes before actual warrior sunders.
			OnAction: func(sim *Simulation) {
				if sunderArmorAura.IsActive() {
					sunderArmorAura.AddStack(sim)
				}
			},
		})
	}

	if debuffs.FaerieFire != proto.TristateEffect_TristateEffectMissing {
		MakePermanent(FaerieFireAura(target, debuffs.FaerieFire == proto.TristateEffect_TristateEffectImproved))
	}

	if debuffs.DemoralizingRoar != proto.TristateEffect_TristateEffectMissing {
		MakePermanent(DemoralizingRoarAura(target, GetTristateValueInt32(debuffs.DemoralizingRoar, 0, 5)))
	}
	if debuffs.DemoralizingShout != proto.TristateEffect_TristateEffectMissing {
		MakePermanent(DemoralizingShoutAura(target, 0, GetTristateValueInt32(debuffs.DemoralizingShout, 0, 5)))
	}
	if debuffs.ThunderClap != proto.TristateEffect_TristateEffectMissing {
		MakePermanent(ThunderClapAura(target, GetTristateValueInt32(debuffs.ThunderClap, 0, 3)))
	}
	if debuffs.InsectSwarm {
		MakePermanent(InsectSwarmAura(target))
	}
	if debuffs.ScorpidSting {
		MakePermanent(ScorpidStingAura(target))
	}

	if debuffs.Screech {
		MakePermanent(ScreechAura(target))
	}

	if debuffs.TotemOfWrath {
		MakePermanent(TotemOfWrathDebuff(target))
	}

	if debuffs.MasterPoisoner {
		MakePermanent(MasterPoisonerDebuff(target, 3))
	}

	if debuffs.HeartOfTheCrusader {
		MakePermanent(HeartoftheCrusaderDebuff(target, 3))
	}
}

func ScheduledAura(aura *Aura, preActivate bool, options PeriodicActionOptions) *Aura {
	aura.Duration = NeverExpires
	aura.OnReset = func(aura *Aura, sim *Simulation) {
		if preActivate {
			aura.Activate(sim)
		}
		StartPeriodicAction(sim, options)
	}
	return aura
}

func MiseryAura(target *Unit) *Aura {
	return target.GetOrRegisterAura(Aura{
		Label:    "Misery",
		Tag:      MinorSpellHitDebuffAuraTag,
		Priority: 3,
		ActionID: ActionID{SpellID: 33198},
		Duration: time.Second * 24,
		OnGain: func(aura *Aura, sim *Simulation) {
			target.PseudoStats.BonusSpellHitRatingTaken += 3 * SpellHitRatingPerHitChance
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			target.PseudoStats.BonusSpellHitRatingTaken -= 3 * SpellHitRatingPerHitChance
		},
	})
}

var JudgementOfWisdomAuraLabel = "Judgement of Wisdom"

func JudgementOfWisdomAura(target *Unit) *Aura {
	actionID := ActionID{SpellID: 53408}

	return target.GetOrRegisterAura(Aura{
		Label:    JudgementOfWisdomAuraLabel,
		ActionID: actionID,
		Duration: time.Second * 20,
		OnSpellHitTaken: func(aura *Aura, sim *Simulation, spell *Spell, spellEffect *SpellEffect) {
			if spellEffect.ProcMask.Matches(ProcMaskEmpty) {
				return // Phantom spells (Romulo's, Lightning Capacitor, etc) don't proc JoW.
			}

			// Melee claim that wisdom can proc on misses.
			if !spellEffect.ProcMask.Matches(ProcMaskMeleeOrRanged) && !spellEffect.Landed() {
				return
			}

			unit := spell.Unit
			if unit.HasManaBar() && sim.RandomFloat("jow") > 0.5 {
				if unit.JowManaMetrics == nil {
					unit.JowManaMetrics = unit.NewManaMetrics(actionID)
				}
				// JoW returns 2% of base mana 50% of the time.
				unit.AddMana(sim, unit.BaseMana*0.02, unit.JowManaMetrics, false)
			}

			if spell.ActionID.SpellID == 35395 { // Crusader strike
				aura.Refresh(sim)
			}
		},
	})
}

var JudgementOfLightAuraLabel = "Judgement of Light"

func JudgementOfLightAura(target *Unit) *Aura {
	actionID := ActionID{SpellID: 27163}

	return target.GetOrRegisterAura(Aura{
		Label:    JudgementOfLightAuraLabel,
		ActionID: actionID,
		Duration: time.Second * 20,
		OnSpellHitTaken: func(aura *Aura, sim *Simulation, spell *Spell, spellEffect *SpellEffect) {
			if !spellEffect.ProcMask.Matches(ProcMaskMelee) || !spellEffect.Landed() {
				return
			}

			if spell.ActionID.SpellID == 35395 {
				aura.Refresh(sim)
			}
		},
	})
}

const spelldmgtag = `13%dmg`

func CurseOfElementsAura(target *Unit) *Aura {
	multiplier := 1.13

	return target.GetOrRegisterAura(Aura{
		Label:    "Curse of Elements",
		Tag:      spelldmgtag,
		ActionID: ActionID{SpellID: 47865},
		OnGain: func(aura *Aura, sim *Simulation) {
			if !target.HasActiveAuraWithTag(spelldmgtag) {
				aura.Unit.PseudoStats.ArcaneDamageTakenMultiplier *= multiplier
				aura.Unit.PseudoStats.FireDamageTakenMultiplier *= multiplier
				aura.Unit.PseudoStats.FrostDamageTakenMultiplier *= multiplier
				aura.Unit.PseudoStats.ShadowDamageTakenMultiplier *= multiplier
				aura.Unit.PseudoStats.NatureDamageTakenMultiplier *= multiplier
			}
			aura.Unit.AddStatsDynamic(sim, stats.Stats{stats.ArcaneResistance: -165, stats.FireResistance: -165, stats.FrostResistance: -165, stats.ShadowResistance: -165, stats.NatureResistance: -165})
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			if !target.HasActiveAuraWithTag(spelldmgtag) {
				aura.Unit.PseudoStats.ArcaneDamageTakenMultiplier /= multiplier
				aura.Unit.PseudoStats.FireDamageTakenMultiplier /= multiplier
				aura.Unit.PseudoStats.FrostDamageTakenMultiplier /= multiplier
				aura.Unit.PseudoStats.ShadowDamageTakenMultiplier /= multiplier
				aura.Unit.PseudoStats.NatureDamageTakenMultiplier /= multiplier
			}
			aura.Unit.AddStatsDynamic(sim, stats.Stats{stats.ArcaneResistance: 165, stats.FireResistance: 165, stats.FrostResistance: 165, stats.ShadowResistance: 165, stats.NatureResistance: 165})
		},
	})
}

func EarthAndMoonAura(target *Unit) *Aura {
	multiplier := 1.13

	return target.GetOrRegisterAura(Aura{
		Label:    "Earth And Moon",
		Tag:      spelldmgtag,
		ActionID: ActionID{SpellID: 48511},
		OnGain: func(aura *Aura, sim *Simulation) {
			if !target.HasActiveAuraWithTag(spelldmgtag) {
				aura.Unit.PseudoStats.ArcaneDamageTakenMultiplier *= multiplier
				aura.Unit.PseudoStats.FireDamageTakenMultiplier *= multiplier
				aura.Unit.PseudoStats.FrostDamageTakenMultiplier *= multiplier
				aura.Unit.PseudoStats.ShadowDamageTakenMultiplier *= multiplier
				aura.Unit.PseudoStats.NatureDamageTakenMultiplier *= multiplier
			}
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			if !target.HasActiveAuraWithTag(spelldmgtag) {
				aura.Unit.PseudoStats.ArcaneDamageTakenMultiplier /= multiplier
				aura.Unit.PseudoStats.FireDamageTakenMultiplier /= multiplier
				aura.Unit.PseudoStats.FrostDamageTakenMultiplier /= multiplier
				aura.Unit.PseudoStats.ShadowDamageTakenMultiplier /= multiplier
				aura.Unit.PseudoStats.NatureDamageTakenMultiplier /= multiplier
			}
		},
	})
}

func EbonPlaguebringerAura(target *Unit) *Aura {
	magicMultiplier := 1.13
	diseaseMultiplier := 1.3

	return target.GetOrRegisterAura(Aura{
		Label:    "Ebon Plaguebringer",
		Tag:      spelldmgtag,
		ActionID: ActionID{SpellID: 51161},
		OnGain: func(aura *Aura, sim *Simulation) {
			if !target.HasActiveAuraWithTag(spelldmgtag) {
				aura.Unit.PseudoStats.ArcaneDamageTakenMultiplier *= magicMultiplier
				aura.Unit.PseudoStats.FireDamageTakenMultiplier *= magicMultiplier
				aura.Unit.PseudoStats.FrostDamageTakenMultiplier *= magicMultiplier
				aura.Unit.PseudoStats.ShadowDamageTakenMultiplier *= magicMultiplier
				aura.Unit.PseudoStats.NatureDamageTakenMultiplier *= magicMultiplier
			}
			aura.Unit.PseudoStats.DiseaseDamageTakenMultiplier *= diseaseMultiplier
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			if !target.HasActiveAuraWithTag(spelldmgtag) {
				aura.Unit.PseudoStats.ArcaneDamageTakenMultiplier /= magicMultiplier
				aura.Unit.PseudoStats.FireDamageTakenMultiplier /= magicMultiplier
				aura.Unit.PseudoStats.FrostDamageTakenMultiplier /= magicMultiplier
				aura.Unit.PseudoStats.ShadowDamageTakenMultiplier /= magicMultiplier
				aura.Unit.PseudoStats.NatureDamageTakenMultiplier /= magicMultiplier
			}
			aura.Unit.PseudoStats.DiseaseDamageTakenMultiplier /= diseaseMultiplier
		},
	})
}

var BloodFrenzyActionID = ActionID{SpellID: 29859}
var phyDmgDebuff = `4%phydmg`

func BloodFrenzyAura(target *Unit, points int32) *Aura {
	return bloodFrenzySavageCombatAura(target, "Blood Frenzy", BloodFrenzyActionID, points)
}
func SavageCombatAura(target *Unit, points int32) *Aura {
	return bloodFrenzySavageCombatAura(target, "Savage Combat", ActionID{SpellID: 58413}, points)
}

func bloodFrenzySavageCombatAura(target *Unit, label string, id ActionID, points int32) *Aura {
	multiplier := 1 + 0.02*float64(points)
	return target.GetOrRegisterAura(Aura{
		Label:    label + "-" + strconv.Itoa(int(points)),
		Tag:      phyDmgDebuff,
		ActionID: id,
		Priority: multiplier,
		// No fixed duration, lasts as long as the bleed that activates it.
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.PhysicalDamageTakenMultiplier *= multiplier
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.PhysicalDamageTakenMultiplier /= multiplier
		},
	})
}

func GiftOfArthasAura(target *Unit) *Aura {
	return target.GetOrRegisterAura(Aura{
		Label:    "Gift of Arthas",
		ActionID: ActionID{SpellID: 11374},
		Duration: time.Minute * 3,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.BonusPhysicalDamageTaken += 8
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.BonusPhysicalDamageTaken -= 8
		},
	})
}

const BleedDamageAuraTag = "BleedDamage"

func MangleAura(target *Unit) *Aura {
	return target.GetOrRegisterAura(Aura{
		Label:    "Mangle",
		Tag:      BleedDamageAuraTag,
		ActionID: ActionID{SpellID: 33876},
		Duration: time.Second * 12,
		Priority: 1.3,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.PeriodicPhysicalDamageTakenMultiplier *= 1.3
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.PeriodicPhysicalDamageTakenMultiplier /= 1.3
		},
	})
}

func StampedeAura(target *Unit) *Aura {
	return target.GetOrRegisterAura(Aura{
		Label:    "Stampede",
		Tag:      BleedDamageAuraTag,
		ActionID: ActionID{SpellID: 57393},
		Duration: time.Second * 12,
		Priority: 1.25,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.PeriodicPhysicalDamageTakenMultiplier *= 1.25
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.PeriodicPhysicalDamageTakenMultiplier /= 1.25
		},
	})
}

const MajorSpellCritDebuffAuraTag = "majorspellcritdebuff"

func ShadowMasteryAura(target *Unit) *Aura {
	return majorSpellCritDebuffAura(target, "Shadow Mastery", ActionID{SpellID: 17800}, 5)
}

var ImprovedScorchAuraLabel = "Improved Scorch"

func ImprovedScorchAura(target *Unit) *Aura {
	return majorSpellCritDebuffAura(target, ImprovedScorchAuraLabel, ActionID{SpellID: 12873}, 5)
}

var WintersChillAuraLabel = "Winter's Chill"

func WintersChillAura(target *Unit, stacks int32) *Aura {
	return target.GetOrRegisterAura(Aura{
		Label:     WintersChillAuraLabel,
		Tag:       MajorSpellCritDebuffAuraTag,
		Priority:  0,
		ActionID:  ActionID{SpellID: 28595},
		Duration:  time.Second * 30,
		MaxStacks: 5,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.SetStacks(sim, 5)
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.BonusSpellCritRatingTaken -= float64(aura.stacks) * CritRatingPerCritChance
		},
		OnStacksChange: func(aura *Aura, sim *Simulation, oldStacks, newStacks int32) {
			if !aura.active {
				return
			}
			aura.Priority = float64(newStacks)
			aura.Unit.PseudoStats.BonusSpellCritRatingTaken += (float64(newStacks) - float64(oldStacks)) * CritRatingPerCritChance
		},
	})
}

func majorSpellCritDebuffAura(target *Unit, label string, actionID ActionID, percent float64) *Aura {
	bonusSpellCrit := percent * CritRatingPerCritChance
	return target.GetOrRegisterAura(Aura{
		Label:    label,
		Tag:      MajorSpellCritDebuffAuraTag,
		Priority: percent,
		ActionID: actionID,
		Duration: time.Second * 30,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.BonusSpellCritRatingTaken += bonusSpellCrit
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.BonusSpellCritRatingTaken -= bonusSpellCrit
		},
	})
}

var MinorArmorReductionAuraTag = "MinorArmorReductionAura"
var MinorSpellHitDebuffAuraTag = "sphit3%"

func FaerieFireAura(target *Unit, imp bool) *Aura {
	const armorReduction = 0.05

	var mainAura *Aura
	var secondaryAura *Aura

	label := "Faerie Fire"
	if imp {
		label = "Improved " + label
		secondaryAura = target.GetOrRegisterAura(Aura{
			Label:    "Improved Faerie Fire Secondary",
			Tag:      MinorSpellHitDebuffAuraTag,
			Duration: time.Minute * 5,
			Priority: 3,
			// no ActionID to hide this secondary effect from stats
			OnGain: func(aura *Aura, sim *Simulation) {
				aura.Unit.PseudoStats.BonusSpellHitRatingTaken += 3 * SpellHitRatingPerHitChance
			},
			OnExpire: func(aura *Aura, sim *Simulation) {
				aura.Unit.PseudoStats.BonusSpellHitRatingTaken -= 3 * SpellHitRatingPerHitChance
				if mainAura.IsActive() {
					mainAura.Deactivate(sim)
				}
			},
		})

	}
	mainAura = target.GetOrRegisterAura(Aura{
		Label:    label,
		Tag:      MinorArmorReductionAuraTag,
		Priority: armorReduction,
		ActionID: ActionID{SpellID: 770},
		Duration: time.Minute * 5,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.ArmorMultiplier *= (1.0 - armorReduction)
			aura.Unit.updateArmor()
			if imp {
				secondaryAura.Activate(sim)
			}
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.ArmorMultiplier *= (1.0 / (1.0 - armorReduction))
			aura.Unit.updateArmor()
			if secondaryAura.IsActive() {
				secondaryAura.Deactivate(sim)
			}
		},
	})
	return mainAura
}

var SunderArmorAuraLabel = "Sunder Armor"
var MajorArmorReductionTag = "MajorArmorReductionAura"

func SunderArmorAura(target *Unit, startingStacks int32) *Aura {
	armorReductionPerStack := 0.04

	return target.GetOrRegisterAura(Aura{
		Label:     SunderArmorAuraLabel,
		Tag:       MajorArmorReductionTag,
		ActionID:  ActionID{SpellID: 47467},
		Duration:  time.Second * 30,
		MaxStacks: 5,
		Priority:  armorReductionPerStack * 5,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.SetStacks(sim, startingStacks)
		},
		OnStacksChange: func(aura *Aura, sim *Simulation, oldStacks int32, newStacks int32) {
			oldMultiplier := 1.0 - float64(oldStacks)*armorReductionPerStack
			newMultiplier := 1.0 - float64(newStacks)*armorReductionPerStack
			aura.Unit.PseudoStats.ArmorMultiplier *= newMultiplier / oldMultiplier
			aura.Unit.updateArmor()
		},
	})
}

var AcidSpitAuraLabel = "Acid Spit"

func AcidSpitAura(target *Unit, startingStacks int32) *Aura {
	armorReductionPerStack := 0.1

	return target.GetOrRegisterAura(Aura{
		Label:     AcidSpitAuraLabel,
		Tag:       MajorArmorReductionTag,
		ActionID:  ActionID{SpellID: 55754},
		Duration:  time.Second * 10,
		MaxStacks: 2,
		Priority:  armorReductionPerStack * 2,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.SetStacks(sim, startingStacks)
		},
		OnStacksChange: func(aura *Aura, sim *Simulation, oldStacks int32, newStacks int32) {
			oldMultiplier := (1.0 - float64(oldStacks)*armorReductionPerStack)
			newMultiplier := (1.0 - float64(newStacks)*armorReductionPerStack)
			aura.Unit.PseudoStats.ArmorMultiplier *= (newMultiplier / oldMultiplier)
			aura.Unit.updateArmor()
		},
	})
}

func ExposeArmorAura(target *Unit, hasGlyph bool) *Aura {
	armorReduction := 0.2
	duration := time.Second * 30
	if hasGlyph {
		duration += 12
	}
	return target.GetOrRegisterAura(Aura{
		Label:    "ExposeArmor",
		Tag:      MajorArmorReductionTag,
		ActionID: ActionID{SpellID: 48669},
		Duration: duration,
		Priority: armorReduction,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.ArmorMultiplier *= (1.0 - armorReduction)
			aura.Unit.updateArmor()
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.ArmorMultiplier *= (1.0 / (1.0 - armorReduction))
			aura.Unit.updateArmor()
		},
	})
}

func CurseOfWeaknessAura(target *Unit, points int32) *Aura {
	APReduction := 478 * (1 + 0.1*float64(points))
	bonus := stats.Stats{stats.AttackPower: -APReduction}
	armorReduction := 0.05

	return target.GetOrRegisterAura(Aura{
		Label:    "Curse of Weakness",
		Tag:      MinorArmorReductionAuraTag,
		Priority: armorReduction,
		ActionID: ActionID{SpellID: 50511},
		Duration: time.Minute * 2,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.AddStatsDynamic(sim, bonus)
			aura.Unit.PseudoStats.ArmorMultiplier *= (1.0 - armorReduction)
			aura.Unit.updateArmor()
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.AddStatsDynamic(sim, bonus.Multiply(-1))
			aura.Unit.PseudoStats.ArmorMultiplier *= (1.0 - armorReduction)
			aura.Unit.updateArmor()
		},
	})
}

func StingAura(target *Unit) *Aura {
	armorReduction := 0.05

	return target.GetOrRegisterAura(Aura{
		Label:    "Sting",
		Tag:      MinorArmorReductionAuraTag,
		Priority: armorReduction,
		ActionID: ActionID{SpellID: 56631},
		Duration: time.Second * 20,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.ArmorMultiplier *= (1.0 - armorReduction)
			aura.Unit.updateArmor()
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.ArmorMultiplier *= (1.0 - armorReduction)
			aura.Unit.updateArmor()
		},
	})
}

func SporeCloudAura(target *Unit) *Aura {
	armorReduction := 0.03

	return target.GetOrRegisterAura(Aura{
		Label:    "Spore Cloud",
		ActionID: ActionID{SpellID: 53598},
		Duration: time.Second * 9,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.ArmorMultiplier *= (1.0 - armorReduction)
			aura.Unit.updateArmor()
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.ArmorMultiplier *= (1.0 / (1.0 - armorReduction))
			aura.Unit.updateArmor()
		},
	})
}

func ShatteringThrowAura(target *Unit) *Aura {
	armorReduction := 0.2

	return target.GetOrRegisterAura(Aura{
		Label:    "Shattering Throw",
		ActionID: ActionID{SpellID: 64382},
		Duration: time.Second * 10,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.ArmorMultiplier *= (1.0 - armorReduction)
			aura.Unit.updateArmor()
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.ArmorMultiplier *= (1.0 / (1.0 - armorReduction))
			aura.Unit.updateArmor()
		},
	})
}

func HuntersMarkAura(target *Unit, points int32, glyphed bool) *Aura {
	bonus := 500.0 * (1 + 0.1*float64(points))
	priority := float64(points)

	if glyphed {
		bonus += 500.0 * 0.2
		priority += 2
	}

	return target.GetOrRegisterAura(Aura{
		Label:    "HuntersMark-" + strconv.Itoa(int(priority)),
		Tag:      "HuntersMark",
		ActionID: ActionID{SpellID: 53338},
		Duration: NeverExpires,
		Priority: priority,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.BonusRangedAttackPowerTaken += bonus
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.BonusRangedAttackPowerTaken -= bonus
		},
	})
}

const APReductionAuraTag = "APReduction"

func DemoralizingRoarAura(target *Unit, points int32) *Aura {
	apReduction := 248 * (1 + 0.08*float64(points))

	return target.GetOrRegisterAura(Aura{
		Label:    "DemoralizingRoar-" + strconv.Itoa(int(points)),
		Tag:      APReductionAuraTag,
		ActionID: ActionID{SpellID: 26998},
		Duration: time.Second * 30,
		Priority: apReduction,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.AddStatDynamic(sim, stats.AttackPower, -apReduction)
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.AddStatDynamic(sim, stats.AttackPower, apReduction)
		},
	})
}

func DemoralizingShoutAura(target *Unit, boomingVoicePts int32, impDemoShoutPts int32) *Aura {
	duration := time.Duration(float64(time.Second*30) * (1 + 0.1*float64(boomingVoicePts)))
	apReduction := 300 * (1 + 0.08*float64(impDemoShoutPts))

	return target.GetOrRegisterAura(Aura{
		Label:    "DemoralizingShout-" + strconv.Itoa(int(impDemoShoutPts)),
		Tag:      APReductionAuraTag,
		ActionID: ActionID{SpellID: 25203},
		Duration: duration,
		Priority: apReduction,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.AddStatDynamic(sim, stats.AttackPower, -apReduction)
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.AddStatDynamic(sim, stats.AttackPower, apReduction)
		},
	})
}

func ScreechAura(target *Unit) *Aura {
	const apReduction = 210.0

	return target.GetOrRegisterAura(Aura{
		Label:    "Screech",
		ActionID: ActionID{SpellID: 27051},
		Duration: time.Second * 4,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.AddStatDynamic(sim, stats.AttackPower, -apReduction)
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.AddStatDynamic(sim, stats.AttackPower, apReduction)
		},
	})
}

const ThunderClapAuraTag = "ThunderClap"

func ThunderClapAura(target *Unit, points int32) *Aura {
	speedMultiplier := 0.9
	if points == 1 {
		speedMultiplier = 0.86
	} else if points == 2 {
		speedMultiplier = 0.83
	} else if points == 3 {
		speedMultiplier = 0.8
	}
	inverseMult := 1 / speedMultiplier

	return target.GetOrRegisterAura(Aura{
		Label:    "ThunderClap-" + strconv.Itoa(int(points)),
		Tag:      ThunderClapAuraTag,
		ActionID: ActionID{SpellID: 25264},
		Duration: time.Second * 30,
		Priority: inverseMult,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.MultiplyAttackSpeed(sim, speedMultiplier)
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.MultiplyAttackSpeed(sim, inverseMult)
		},
	})
}

const IcyTouchAuraTag = "IcyTouch"

func IcyTouchAura(target *Unit, impIcyTouch int32) *Aura {
	speedMultiplier := 0.85
	if impIcyTouch > 0 {
		speedMultiplier -= 0.02 * float64(impIcyTouch)
	}

	inverseMult := 1 / speedMultiplier
	return target.GetOrRegisterAura(Aura{
		Label:    "IcyTouch",
		Tag:      IcyTouchAuraTag,
		ActionID: ActionID{SpellID: 49909},
		Duration: time.Second * 15,
		Priority: inverseMult,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.MultiplyAttackSpeed(sim, speedMultiplier)
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.MultiplyAttackSpeed(sim, inverseMult)
		},
	})
}

const RuneOfRazoriceVulnerabilityTag = "RuneOfRazoriceVulnerability"

func RuneOfRazoriceVulnerabilityAura(target *Unit) *Aura {
	frostVulnPerStack := 0.02
	aura := target.GetOrRegisterAura(Aura{
		Label:     "RuneOfRazoriceVulnerability",
		Tag:       RuneOfRazoriceVulnerabilityTag,
		ActionID:  ActionID{SpellID: 53343},
		Duration:  NeverExpires,
		MaxStacks: 5,
		Priority:  1.0 / 1.1,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.SetStacks(sim, 0)
		},
		OnStacksChange: func(aura *Aura, sim *Simulation, oldStacks int32, newStacks int32) {
			if !aura.active {
				return
			}
			oldMultiplier := 1.0 + float64(oldStacks)*frostVulnPerStack
			newMultiplier := 1.0 + float64(newStacks)*frostVulnPerStack
			aura.Unit.PseudoStats.FrostDamageTakenMultiplier *= (newMultiplier / oldMultiplier)
		},
	})
	return aura
}

func InsectSwarmAura(target *Unit) *Aura {
	return target.GetOrRegisterAura(Aura{
		Label:    "InsectSwarmMiss",
		ActionID: ActionID{SpellID: 27013},
		Duration: time.Second * 12,
		OnGain: func(aura *Aura, sim *Simulation) {
			if !aura.Unit.HasActiveAura("ScorpidSting") {
				aura.Unit.PseudoStats.IncreasedMissChance += 0.02
			}
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			if !aura.Unit.HasActiveAura("ScorpidSting") {
				aura.Unit.PseudoStats.IncreasedMissChance -= 0.02
			}
		},
	})
}

func ScorpidStingAura(target *Unit) *Aura {
	return target.GetOrRegisterAura(Aura{
		Label:    "Scorpid Sting",
		ActionID: ActionID{SpellID: 3043},
		Duration: time.Second * 20,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.IncreasedMissChance += 0.05
			if aura.Unit.HasActiveAura("InsectSwarmMiss") {
				aura.Unit.PseudoStats.IncreasedMissChance -= 0.02
			}
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.IncreasedMissChance -= 0.05
			if aura.Unit.HasActiveAura("InsectSwarmMiss") {
				aura.Unit.PseudoStats.IncreasedMissChance += 0.02
			}
		},
	})
}

const MinorCritDebuffAuraTag = "minorcritdebuff"

func TotemOfWrathDebuff(target *Unit) *Aura {
	return minorCritDebuffAura(target, "Totem of Wrath Debuff", ActionID{SpellID: 30708}, 3, time.Minute*5)
}

func MasterPoisonerDebuff(target *Unit, points float64) *Aura {
	return minorCritDebuffAura(target, "Master Poisoner", ActionID{SpellID: 58410}, points, time.Second*20)
}

func HeartoftheCrusaderDebuff(target *Unit, points float64) *Aura {
	return minorCritDebuffAura(target, "Heart of the Crusader", ActionID{SpellID: 20337}, points, time.Second*20)
}

func minorCritDebuffAura(target *Unit, label string, actionID ActionID, points float64, duration time.Duration) *Aura {
	return target.GetOrRegisterAura(Aura{
		Label:    label,
		Tag:      MinorCritDebuffAuraTag,
		Priority: points,
		ActionID: actionID,
		Duration: duration,
		OnGain: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.BonusCritRatingTaken += points * CritRatingPerCritChance
		},
		OnExpire: func(aura *Aura, sim *Simulation) {
			aura.Unit.PseudoStats.BonusCritRatingTaken -= points * CritRatingPerCritChance
		},
	})
}
