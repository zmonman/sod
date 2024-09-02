import{z as a,m as t,n as e,o as s,T as r,a0 as n,x as o}from"./preset_utils-BsPg9Ll3.chunk.js";import{K as i,a8 as l,aG as u,aa as c,ad as f,ae as p,ao as d,aj as S,a6 as m,am as g,ak as v,an as I,aH as h,S as P,aq as k,C as w,F as T,R as A}from"./detailed_results-DzdytCXS.chunk.js";const H=a({fieldName:"aura",label:"Aura",values:[{name:"None",value:i.NoPaladinAura},{name:"Devotion Aura",value:i.DevotionAura},{name:"Retribution Aura",value:i.RetributionAura}]}),E=t("Blank",{items:[]}),R={name:"Standard",data:l.create({talentsString:"50350151020013053100515221-50023131203"})},b=u.create({aura:i.DevotionAura}),O=c.create({flask:f.FlaskUnknown,food:p.FoodUnknown}),y=e(P.SpecHolyPaladin,{cssClass:"holy-paladin-sim-ui",cssScheme:"paladin",knownIssues:[],epStats:[d.StatIntellect,d.StatSpirit,d.StatSpellPower,d.StatSpellCrit,d.StatSpellHaste,d.StatMP5],epReferenceStat:d.StatSpellPower,displayStats:[d.StatHealth,d.StatMana,d.StatStamina,d.StatIntellect,d.StatSpirit,d.StatSpellPower,d.StatSpellCrit,d.StatSpellHaste,d.StatMP5],defaults:{gear:E.gear,epWeights:s.fromMap({[d.StatIntellect]:.38,[d.StatSpirit]:.34,[d.StatSpellPower]:1,[d.StatSpellCrit]:.69,[d.StatSpellHaste]:.77,[d.StatMP5]:0}),consumes:O,talents:R.data,specOptions:b,raidBuffs:S.create({giftOfTheWild:m.TristateEffectImproved,powerWordFortitude:m.TristateEffectImproved,strengthOfEarthTotem:m.TristateEffectRegular,arcaneBrilliance:!0,moonkinAura:!0,manaSpringTotem:m.TristateEffectRegular,thorns:m.TristateEffectImproved,devotionAura:m.TristateEffectImproved,shadowProtection:!0}),partyBuffs:g.create({}),individualBuffs:v.create({blessingOfKings:!0,blessingOfSanctuary:!0,blessingOfWisdom:m.TristateEffectImproved,blessingOfMight:m.TristateEffectImproved}),debuffs:I.create({judgementOfWisdom:!0,judgementOfLight:!0,faerieFire:!0,exposeArmor:m.TristateEffectImproved,sunderArmor:!0,thunderClap:m.TristateEffectImproved,insectSwarm:!0})},playerIconInputs:[],includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[r,n,H]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[R],rotations:[],gear:[E]},autoRotation:a=>h.create(),raidSimPresets:[{spec:P.SpecHolyPaladin,tooltip:"Holy Paladin",defaultName:"Holy",iconUrl:k(w.ClassPaladin,0),talents:R.data,specOptions:b,consumes:O,defaultFactionRaces:{[T.Unknown]:A.RaceUnknown,[T.Alliance]:A.RaceHuman,[T.Horde]:A.RaceUnknown},defaultGear:{[T.Unknown]:{},[T.Alliance]:{1:E.gear},[T.Horde]:{1:E.gear}}}]});class B extends o{constructor(a,t){super(a,t,y)}}export{B as H};
