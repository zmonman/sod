import{L as e,m as a,k as s,l,n as t,o as n,X as r,ab as o,ac as p,ad as i,s as c,ae as d,T as u,Y as I,Z as v,_ as m,$ as h,a1 as g,a0 as C,x as S}from"./preset_utils-BsPg9Ll3.chunk.js";import{a7 as O,a8 as P,a_ as T,aa as A,ax as y,ac as E,au as L,af as b,aj as k,a6 as q,ak as G,an as U,P as f,ao as R,ay as w,am as D,S as H,aq as M,C as B,F as K,R as x}from"./detailed_results-DzdytCXS.chunk.js";const V=e({fieldName:"honorAmongThievesCritRate",label:"Honor Among Thieves Crit Rate",labelTooltip:"Number of crits other group members generate within 100 seconds"}),F={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1787}}},doAtValue:{const:{val:"0s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:425096}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}},{spellCanCast:{spellId:{spellId:1856}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:14177}}},{spellCanCast:{spellId:{spellId:399963}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14177}}},{castSpell:{spellId:{spellId:399963}}}]}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:5171}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"25s"}}}}]}},castSpell:{spellId:{spellId:5171}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{castSpell:{spellId:{spellId:399956}}}}]},N={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1787}}},doAtValue:{const:{val:"0s"}}},{action:{castSpell:{spellId:{spellId:20572}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432276}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}}}]}},castSpell:{spellId:{spellId:11289}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}]}},castSpell:{spellId:{itemId:10646}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}]}},strictSequence:{actions:[{castSpell:{spellId:{itemId:215168}}},{castSpell:{spellId:{itemId:18641}}}]}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432276}}},{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}}},{and:{vals:[{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11289}}},rhs:{const:{val:"1.5s"}}}}]}}]}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"8s"}}}}]}},castSpell:{spellId:{spellId:11273}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432271}}},{not:{val:{auraIsActive:{auraId:{spellId:6774,rank:2}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432271}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:6774,rank:2}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"20"}}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:425096}}},{not:{val:{auraIsActive:{auraId:{spellId:425096}}}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{or:{vals:[{auraIsActive:{auraId:{spellId:425096}}},{not:{val:{runeIsEquipped:{runeId:{spellId:425096}}}}}]}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14177}}},{castSpell:{spellId:{spellId:399963}}}]}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}}]}}]}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{and:{vals:[{auraIsKnown:{auraId:{spellId:13750}}},{auraIsActive:{auraId:{spellId:13750}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}}]}}]}},{cmp:{op:"OpLt",lhs:{timeToEnergyTick:{}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsKnown:{auraId:{spellId:425096}}},{auraIsActive:{auraId:{spellId:425096}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}}]}},castSpell:{spellId:{spellId:399956}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:399956}}}}]},j={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1787}}},doAtValue:{const:{val:"0s"}}}],priorityList:[{action:{condition:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}}}},{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"15"}}}}]}},castSpell:{spellId:{itemId:7676}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLt",lhs:{math:{op:"OpAdd",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}},rhs:{math:{op:"OpDiv",lhs:{currentEnergy:{}},rhs:{const:{val:"10"}}}}}},rhs:{const:{val:"16"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}},rhs:{remainingTime:{}}}},{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"80"}}}}]}}]}},castSpell:{spellId:{spellId:8650}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:425096}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:14177}}},{spellCanCast:{spellId:{spellId:399963}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14177}}},{castSpell:{spellId:{spellId:399963}}}]}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}}}},{cmp:{op:"OpLt",lhs:{math:{op:"OpAdd",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}},rhs:{math:{op:"OpDiv",lhs:{currentEnergy:{}},rhs:{const:{val:"10"}}}}}},rhs:{const:{val:"16"}}}}]}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}},rhs:{remainingTime:{}}}}]}},castSpell:{spellId:{spellId:399956}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{or:{vals:[{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"80"}}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}},rhs:{remainingTime:{}}}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"8"}}}}]}}]}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:2824}}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},castSpell:{spellId:{spellId:399956}}}}]},W={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1787}}},doAtValue:{const:{val:"0s"}}},{action:{castSpell:{spellId:{spellId:20572}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432276}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}}}]}},castSpell:{spellId:{spellId:11289}}}},{action:{condition:{and:{vals:[{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"2s"}}}}]}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:11197,rank:4}}}},{action:{condition:{and:{vals:[{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"2s"}}}}]}},{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:399956}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"6s"}}}},waitUntil:{condition:{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"2s"}}}}]}}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{itemId:10646}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},strictSequence:{actions:[{castSpell:{spellId:{itemId:215168}}},{castSpell:{spellId:{itemId:18641}}}]}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432276}}},{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}}},{and:{vals:[{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11289}}},rhs:{const:{val:"1.5s"}}}}]}}]}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"8s"}}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{spellId:11273}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432271}}},{not:{val:{auraIsActive:{auraId:{spellId:6774,rank:2}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432271}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:6774,rank:2}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"20"}}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:425096}}},{not:{val:{auraIsActive:{auraId:{spellId:425096}}}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{or:{vals:[{auraIsActive:{auraId:{spellId:425096}}},{not:{val:{runeIsEquipped:{runeId:{spellId:425096}}}}}]}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14177}}},{castSpell:{spellId:{spellId:399963}}}]}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}}]}}]}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{and:{vals:[{auraIsKnown:{auraId:{spellId:13750}}},{auraIsActive:{auraId:{spellId:13750}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}}]}}]}},{cmp:{op:"OpLt",lhs:{timeToEnergyTick:{}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsKnown:{auraId:{spellId:425096}}},{auraIsActive:{auraId:{spellId:425096}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}}]}},castSpell:{spellId:{spellId:399956}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:399956}}}}]},_={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1787}}},doAtValue:{const:{val:"0s"}}},{action:{castSpell:{spellId:{spellId:20572}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}]}},castSpell:{spellId:{itemId:10646}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}]}},strictSequence:{actions:[{castSpell:{spellId:{itemId:215168}}},{castSpell:{spellId:{itemId:18641}}}]}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432271}}},{not:{val:{auraIsActive:{auraId:{spellId:6774,rank:2}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432271}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:6774,rank:2}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"20"}}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:425096}}},{not:{val:{auraIsActive:{auraId:{spellId:425096}}}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{or:{vals:[{auraIsActive:{auraId:{spellId:425096}}},{not:{val:{runeIsEquipped:{runeId:{spellId:425096}}}}}]}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14177}}},{castSpell:{spellId:{spellId:399963}}}]}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}}]}}]}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}},{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{and:{vals:[{auraIsKnown:{auraId:{spellId:13750}}},{auraIsActive:{auraId:{spellId:13750}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}}]}}]}},{cmp:{op:"OpLt",lhs:{timeToEnergyTick:{}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsKnown:{auraId:{spellId:425096}}},{auraIsActive:{auraId:{spellId:425096}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}}]}},castSpell:{spellId:{spellId:424785}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:424785}}}}]},z={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1787}}},doAtValue:{const:{val:"0s"}}},{action:{castSpell:{spellId:{spellId:20572}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{condition:{and:{vals:[{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"2s"}}}}]}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:11197,rank:4}}}},{action:{condition:{and:{vals:[{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"2s"}}}}]}},{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:424785}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"6s"}}}},waitUntil:{condition:{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"2s"}}}}]}}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{itemId:10646}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},strictSequence:{actions:[{castSpell:{spellId:{itemId:215168}}},{castSpell:{spellId:{itemId:18641}}}]}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432271}}},{not:{val:{auraIsActive:{auraId:{spellId:6774,rank:2}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432271}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:6774,rank:2}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"20"}}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:425096}}},{not:{val:{auraIsActive:{auraId:{spellId:425096}}}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{or:{vals:[{auraIsActive:{auraId:{spellId:425096}}},{not:{val:{runeIsEquipped:{runeId:{spellId:425096}}}}}]}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14177}}},{castSpell:{spellId:{spellId:399963}}}]}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}}]}}]}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{and:{vals:[{auraIsKnown:{auraId:{spellId:13750}}},{auraIsActive:{auraId:{spellId:13750}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}}]}}]}},{cmp:{op:"OpLt",lhs:{timeToEnergyTick:{}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsKnown:{auraId:{spellId:425096}}},{auraIsActive:{auraId:{spellId:425096}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}}]}},castSpell:{spellId:{spellId:424785}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:424785}}}}]},X={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1787}}},doAtValue:{const:{val:"0s"}}},{action:{castSpell:{spellId:{spellId:26297,tag:6}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}]}},castSpell:{spellId:{itemId:10646}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}]}},strictSequence:{actions:[{castSpell:{spellId:{itemId:215168}}},{castSpell:{spellId:{itemId:4395}}}]}}},{hide:!0,action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432276}}},{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}}},{and:{vals:[{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11289}}},rhs:{const:{val:"1.5s"}}}}]}}]}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"8s"}}}}]}},castSpell:{spellId:{spellId:11273}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432271}}},{not:{val:{auraIsActive:{auraId:{spellId:400012}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:400012}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432271}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:400012}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"20"}}}}]}},castSpell:{spellId:{spellId:400012}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432271}}},{not:{val:{auraIsActive:{auraId:{spellId:6774,rank:2}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432271}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:6774,rank:2}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"20"}}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:31016}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}}]}}]}}]}},castSpell:{spellId:{spellId:31016}}}},{action:{condition:{and:{vals:[{spellIsKnown:{spellId:{spellId:14251}}},{spellCanCast:{spellId:{spellId:14251}}}]}},castSpell:{spellId:{spellId:14251}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:31016}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:424785}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:424785,tag:100}}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:424785}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:425012}}},{not:{val:{auraIsActive:{auraId:{spellId:13750}}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:425012}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{and:{vals:[{auraIsKnown:{auraId:{spellId:13750}}},{auraIsActive:{auraId:{spellId:13750}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}}]}}]}},{cmp:{op:"OpLt",lhs:{timeToEnergyTick:{}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsKnown:{auraId:{spellId:425096}}},{auraIsActive:{auraId:{spellId:425096}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}},{cmp:{op:"OpGe",lhs:{dotRemainingTime:{spellId:{spellId:424785,tag:100}}},rhs:{const:{val:"7"}}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:424785,tag:100}}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:11294,rank:8}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{and:{vals:[{auraIsKnown:{auraId:{spellId:13750}}},{auraIsActive:{auraId:{spellId:13750}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}}]}}]}},{cmp:{op:"OpLt",lhs:{timeToEnergyTick:{}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsKnown:{auraId:{spellId:425096}}},{auraIsActive:{auraId:{spellId:425096}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}}]}},castSpell:{spellId:{spellId:424785}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:424785}}}},{action:{condition:{spellIsKnown:{spellId:{spellId:436564}}},castSpell:{spellId:{spellId:436564}}}}]},Y={items:[{id:211510},{id:209422},{id:209692},{id:209680},{id:211512,rune:399965},{id:3202},{id:7359,rune:424785},{id:209421},{id:10410,rune:399963},{id:211511},{id:20439},{id:2933},{id:211449},{},{id:209525},{id:209691},{id:209688}]},Z={items:[{id:211510},{id:209422},{id:209692},{id:209680},{id:211512,rune:399965},{id:3202},{id:7359,rune:399956},{id:209421},{id:10410,rune:399963},{id:211511},{id:20439},{id:2933},{id:211449},{},{id:209436},{id:209436},{id:209688}]},$={items:[{id:215166},{id:213344},{id:9647},{id:5257,enchant:849},{id:213313,enchant:866,rune:399965},{id:19590,enchant:856},{id:213319,enchant:904,rune:399956},{id:215115,rune:400029},{id:213332,rune:399963},{id:213341,enchant:247,rune:425096},{id:19512},{id:213284},{id:211449},{id:213348},{id:213291,enchant:7210},{id:3187,randomSuffix:1554,enchant:7210},{id:213355}]},J={items:[{id:223963,rune:432259},{id:213344},{id:221411},{id:11626,enchant:849},{id:213313,enchant:866,rune:400014},{id:19590,enchant:856,rune:432271},{id:15708,enchant:904,rune:399956},{id:11686,rune:400029},{id:213332,rune:400012},{id:213341,enchant:247,rune:400016},{id:19511},{id:220626},{id:211449},{id:223195},{id:221460,enchant:2564},{id:220585,enchant:2564},{id:220572}]},Q={items:[{id:223963,rune:432259},{id:213344},{id:221411},{id:11626,enchant:849},{id:213313,enchant:866,rune:400014},{id:19590,enchant:856,rune:432271},{id:15708,enchant:904,rune:424785},{id:11686,rune:400029},{id:213332,rune:400012},{id:213341,enchant:247,rune:400016},{id:19511},{id:220626},{id:211449},{id:223195},{id:220588,enchant:2564},{id:220589,enchant:2564},{id:220572}]},ee={items:[{id:226446,enchant:1505,rune:432264},{id:228354},{id:226478,enchant:7328},{id:228290,enchant:7564,rune:436564},{id:226447,enchant:1891,rune:400014},{id:226442,enchant:923,rune:432273},{id:226475,enchant:1887,rune:424785},{id:226440,rune:425012},{id:226445,enchant:1505,rune:400012},{id:226443,enchant:911,rune:400016},{id:227280,rune:442813},{id:228286,rune:459312},{id:228686},{id:228722},{id:17075,enchant:1900},{id:228143,enchant:2564},{id:228252,enchant:2523}]};a("Blank",{items:[]});const ae=a("P1 Daggers",Z,{customCondition:e=>25==e.getLevel()}),se=a("P2 Daggers",$,{customCondition:e=>40==e.getLevel()}),le=a("P1 Combat",Y,{customCondition:e=>25==e.getLevel()}),te=a("P3 Daggers",J,{customCondition:e=>50==e.getLevel()}),ne=a("P3 Saber",Q,{customCondition:e=>50==e.getLevel()}),re=a("P4 Saber",ee,{customCondition:e=>60==e.getLevel()}),oe={[O.Phase1]:[ae,le],[O.Phase2]:[se],[O.Phase3]:[te,ne],[O.Phase4]:[re],[O.Phase5]:[]},pe=oe[O.Phase4][0],ie=s("Mutilate",F,{customCondition:e=>e.getLevel()<=40}),ce=s("Mutilate IEA",j,{customCondition:e=>e.getLevel()<=40}),de=s("P3 Mutilate",N,{customCondition:e=>50===e.getLevel()}),ue=s("P3 Expose Mutilate",W,{customCondition:e=>50===e.getLevel()}),Ie=s("P3 Saber",_,{customCondition:e=>50===e.getLevel()}),ve=s("P3 Expose Saber",z,{customCondition:e=>50===e.getLevel()}),me=s("P4 Saber Weave",X,{customCondition:e=>60===e.getLevel()}),he={[O.Phase1]:[ie],[O.Phase2]:[ie,ce],[O.Phase3]:[de,ue,Ie,ve],[O.Phase4]:[me],[O.Phase5]:[]},ge={25:{0:he[O.Phase1][0],1:he[O.Phase1][0],2:he[O.Phase1][0]},40:{0:he[O.Phase2][0],1:he[O.Phase2][0],2:he[O.Phase2][0]},50:{0:he[O.Phase3][0],1:he[O.Phase3][0],2:he[O.Phase3][0]},60:{0:he[O.Phase4][0],1:he[O.Phase4][0],2:he[O.Phase4][0]}},Ce=l("P1 Combat Dagger",P.create({talentsString:"-023305002001"}),{customCondition:e=>25===e.getLevel()}),Se=l("P2 CB Mutilate",P.create({talentsString:"005303103551--05"}),{customCondition:e=>40===e.getLevel()}),Oe=l("P2 CB/IEA Mutilate",P.create({talentsString:"005303121551--05"}),{customCondition:e=>40===e.getLevel()}),Pe=l("P2 AR/BF Mutilate",P.create({talentsString:"-0053052020550100201"}),{customCondition:e=>40===e.getLevel()}),Te=l("P3 HAT/CttC Mutilate",P.create({talentsString:"00532012-00532500004501001-02"}),{customCondition:e=>50===e.getLevel()}),Ae=l("P3 Saber Carnage",P.create({talentsString:"0053221-02505501000501031"}),{customCondition:e=>50===e.getLevel()}),ye=l("P3 BF Poison",P.create({talentsString:"0053221205-02330520000501"}),{customCondition:e=>50===e.getLevel()}),Ee=l("P4 Saber",P.create({talentsString:"305323102-0230550100050150131"}),{customCondition:e=>60===e.getLevel()}),Le={[O.Phase1]:[Ce],[O.Phase2]:[Se,Oe,Pe],[O.Phase3]:[Te,Ae,ye],[O.Phase4]:[Ee],[O.Phase5]:[]},be=Le[O.Phase4][0],ke=Le[O.Phase4][0];Le[O.Phase4][0];const qe=T.create({honorAmongThievesCritRate:100}),Ge=A.create({agilityElixir:y.ElixirOfAgility,dragonBreathChili:!1,enchantedSigil:E.FlowingWatersSigil,strengthBuff:L.ElixirOfOgresStrength,mainHandImbue:b.WildStrikes,miscConsumes:{jujuEmber:!0},offHandImbue:b.DeadlyPoison}),Ue=k.create({aspectOfTheLion:!0,battleShout:q.TristateEffectRegular,fireResistanceAura:!0,fireResistanceTotem:!0,giftOfTheWild:q.TristateEffectImproved,strengthOfEarthTotem:q.TristateEffectImproved}),fe=G.create({blessingOfMight:q.TristateEffectRegular}),Re=U.create({curseOfRecklessness:!0,dreamstate:!0,faerieFire:!0,sunderArmor:!0,mangle:!0}),we={profession1:f.Engineering,profession2:f.Leatherworking},De=t(H.SpecTankRogue,{cssClass:"tank-rogue-sim-ui",cssScheme:"rogue",knownIssues:["Rotations are not fully optimized, especially for non-standard setups."],warnings:[],epStats:[R.StatAgility,R.StatStrength,R.StatAttackPower,R.StatMeleeHit,R.StatMeleeCrit,R.StatSpellDamage,R.StatSpellPower,R.StatNaturePower,R.StatSpellHit,R.StatSpellCrit,R.StatDefense,R.StatArmor,R.StatBonusArmor,R.StatStamina,R.StatFireResistance],epPseudoStats:[w.PseudoStatMainHandDps,w.PseudoStatOffHandDps],epReferenceStat:R.StatAttackPower,displayStats:[R.StatHealth,R.StatAgility,R.StatStrength,R.StatAttackPower,R.StatSpellPower,R.StatMeleeHit,R.StatSpellHit,R.StatMeleeCrit,R.StatSpellCrit,R.StatMeleeHaste,R.StatStamina,R.StatDefense,R.StatDodge,R.StatParry,R.StatArmor,R.StatBonusArmor,R.StatFireResistance],defaults:{gear:pe.gear,epWeights:n.fromMap({[R.StatAgility]:1.69,[R.StatStrength]:1.1,[R.StatAttackPower]:1,[R.StatDefense]:4,[R.StatSpellDamage]:.68,[R.StatNaturePower]:.68,[R.StatSpellCrit]:2,[R.StatSpellHit]:5.54,[R.StatMeleeHit]:14.2,[R.StatMeleeCrit]:8.64,[R.StatStamina]:.3,[R.StatArmor]:.01,[R.StatBonusArmor]:.01,[R.StatFireResistance]:.5},{[w.PseudoStatMainHandDps]:2.94,[w.PseudoStatOffHandDps]:2.45}),consumes:Ge,talents:be.data,specOptions:qe,other:we,raidBuffs:Ue,partyBuffs:D.create({}),individualBuffs:fe,debuffs:Re},playerInputs:{inputs:[]},playerIconInputs:[],includeBuffDebuffInputs:[r,o,p,i,c,d],excludeBuffDebuffInputs:[],otherInputs:{inputs:[u,I,v,m,h,g,C,V]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[...Le[O.Phase4],...Le[O.Phase3],...Le[O.Phase2],...Le[O.Phase1]],rotations:[...he[O.Phase4],...he[O.Phase3],...he[O.Phase2],...he[O.Phase1]],gear:[...oe[O.Phase4],...oe[O.Phase3],...oe[O.Phase2],...oe[O.Phase1]]},autoRotation:e=>ge[e.getLevel()][e.getTalentTree()].rotation.rotation,raidSimPresets:[{spec:H.SpecTankRogue,tooltip:"Combat Tank",defaultName:"Combat",iconUrl:M(B.ClassRogue,0),talents:ke.data,specOptions:qe,consumes:Ge,defaultFactionRaces:{[K.Unknown]:x.RaceUnknown,[K.Alliance]:x.RaceHuman,[K.Horde]:x.RaceOrc},defaultGear:{[K.Unknown]:{},[K.Alliance]:{1:oe[O.Phase1][0].gear},[K.Horde]:{1:oe[O.Phase1][0].gear}}}]});class He extends S{constructor(e,a){super(e,a,De)}}export{He as T};
