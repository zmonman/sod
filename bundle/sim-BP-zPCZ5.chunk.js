import{m as e,k as a,a5 as l,n,o as s,ah as t,ai as i,aj as o,ak as p,al as r,am as c,an as d,ao as u,ap as I,aq as m,ar as h,y as v,t as S,v as g,a6 as O,a7 as P,a8 as T,D as k,af as f,x as L}from"./preset_utils-BsPg9Ll3.chunk.js";import{P as A,I as x,A as y,W as E,a as C}from"./warlock_inputs-C6Z6AaxE.chunk.js";import{a7 as G,a8 as D,b3 as w,b4 as q,M,b5 as R,aa as U,aO as b,ab as W,aB as F,ac as B,ad as V,at as H,ae as j,af as z,ag as N,ah as _,b2 as K,ai as J,aj as Q,a6 as X,ak as Y,al as Z,an as $,P as ee,ao as ae,am as le,ap as ne,b7 as se,S as te,aq as ie,C as oe,F as pe,R as re}from"./detailed_results-DzdytCXS.chunk.js";const ce={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:412758}}},doAtValue:{const:{val:"-2.30s"}}}],priorityList:[{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:403650}}}}},channelSpell:{spellId:{spellId:5740,rank:1},interruptIf:{const:{val:"true"}}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentMana:{}},rhs:{const:{val:"300"}}}},castSpell:{spellId:{spellId:1455,rank:2}}}},{action:{castSpell:{spellId:{spellId:403629}}}},{action:{castSpell:{spellId:{spellId:412758}}}}]},de={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:7641,rank:6}}},doAtValue:{const:{val:"-3s"}}}],priorityList:[{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:7658,rank:2}}}}},castSpell:{spellId:{spellId:7658,rank:2}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"25%"}}}}]}},castSpell:{spellId:{itemId:6149}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3.5"}}}},castSpell:{spellId:{spellId:17920,rank:3}}}},{action:{condition:{auraIsActive:{auraId:{spellId:17941}}},castSpell:{spellId:{spellId:7641,rank:6}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:7658,rank:2}}},rhs:{const:{val:"118.5s"}}}},castSpell:{spellId:{spellId:437327}}}},{action:{castSpell:{spellId:{spellId:403501}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15.1s"}}}},multidot:{spellId:{spellId:7651,rank:4},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"18.1s"}}}},multidot:{spellId:{spellId:7648,rank:4},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15.1s"}}}},multidot:{spellId:{spellId:11665,rank:5},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"30.1s"}}}},multidot:{spellId:{spellId:18879,rank:2},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"15%"}}}},castSpell:{spellId:{spellId:11687,rank:4}}}},{action:{castSpell:{spellId:{spellId:7641,rank:6}}}}]},ue={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:19028}}},doAtValue:{const:{val:"-30s"}}},{action:{castSpell:{spellId:{spellId:412758}}},doAtValue:{const:{val:"-2.3"}}}],priorityList:[{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:7658,rank:2}}}}},castSpell:{spellId:{spellId:7658,rank:2}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"25%"}}}}]}},castSpell:{spellId:{itemId:6149}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3.5"}}}},castSpell:{spellId:{spellId:17920,rank:3}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:412758}}},{cmp:{op:"OpEq",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:7658,rank:2}}},rhs:{const:{val:"118.5s"}}}}]}},castSpell:{spellId:{spellId:437327}}}},{action:{castSpell:{spellId:{spellId:403629}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},multidot:{spellId:{spellId:11665,rank:5},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"10%"}}}},castSpell:{spellId:{spellId:11687,rank:4}}}},{action:{castSpell:{spellId:{spellId:412758}}}}]},Ie={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:412758}}},doAtValue:{const:{val:"-2.25s"}}}],priorityList:[{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:7658,rank:2}}}}},castSpell:{spellId:{spellId:7658,rank:2}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"25%"}}}}]}},castSpell:{spellId:{itemId:6149}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"1.5"}}}},castSpell:{spellId:{spellId:18869,rank:4}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3.75"}}}},castSpell:{spellId:{spellId:17920,rank:3}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:403650}}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"30%"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}}]}},castSpell:{spellId:{spellId:11687,rank:4}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:403650}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"13s"}}}}]}},channelSpell:{spellId:{spellId:5740,rank:1},interruptIf:{const:{val:"true"}},instantInterrupt:!0}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:412758}}},{cmp:{op:"OpEq",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:403650}}},rhs:{const:{val:"13.5s"}}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:7658,rank:2}}}]}},castSpell:{spellId:{spellId:437327}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},multidot:{spellId:{spellId:11665,rank:5},maxDots:1,maxOverlap:{const:{val:"0s"}}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11665,rank:5}}},rhs:{const:{val:"2999ms"}}}},castSpell:{spellId:{spellId:17962,rank:1}}}},{action:{castSpell:{spellId:{spellId:403629}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:403650}}},rhs:{const:{val:"2.25s"}}}},castSpell:{spellId:{spellId:412758}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"4.5s"}}}},castSpell:{spellId:{spellId:412758}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:403650}}},rhs:{const:{val:"2s"}}}},{cmp:{op:"OpGe",lhs:{currentManaPercent:{}},rhs:{const:{val:"30%"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"13s"}}}}]}},channelSpell:{spellId:{spellId:5740,rank:1},interruptIf:{const:{val:"true"}},instantInterrupt:!0}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"10%"}}}},castSpell:{spellId:{spellId:11687,rank:4}}}}]},me={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:412758}}},doAtValue:{const:{val:"-2.25s"}}}],priorityList:[{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:7658,rank:2}}}}},castSpell:{spellId:{spellId:7658,rank:2}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"25%"}}}}]}},castSpell:{spellId:{itemId:6149}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"1.5"}}}},castSpell:{spellId:{spellId:18869,rank:4}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3.75"}}}},castSpell:{spellId:{spellId:17920,rank:3}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:403650}}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"30%"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}}]}},castSpell:{spellId:{spellId:11687,rank:4}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:403650}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"13s"}}}}]}},channelSpell:{spellId:{spellId:5740,rank:1},interruptIf:{const:{val:"true"}},instantInterrupt:!0}}},{action:{condition:{and:{vals:[{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:7658,rank:2}}},{cmp:{op:"OpEq",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:403650}}},rhs:{const:{val:"13.5"}}}},{auraIsActive:{auraId:{spellId:412758}}}]}},castSpell:{spellId:{spellId:437327}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},multidot:{spellId:{spellId:11665,rank:5},maxDots:1,maxOverlap:{const:{val:"0s"}}}}},{action:{castSpell:{spellId:{spellId:403629}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:403650}}},rhs:{const:{val:"2.25s"}}}},castSpell:{spellId:{spellId:412758}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"4.5s"}}}},castSpell:{spellId:{spellId:412758}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:403650}}},rhs:{const:{val:"2s"}}}},{cmp:{op:"OpGe",lhs:{currentManaPercent:{}},rhs:{const:{val:"30%"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"13s"}}}}]}},channelSpell:{spellId:{spellId:5740,rank:1},interruptIf:{const:{val:"true"}},instantInterrupt:!0}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"10%"}}}},castSpell:{spellId:{spellId:11687,rank:4}}}},{action:{castSpell:{spellId:{spellId:412758}}}}]},he={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:427726}}},doAtValue:{const:{val:"-5"}}},{action:{castSpell:{spellId:{spellId:412758}}},doAtValue:{const:{val:"-2.25s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"75%"}}}}]}},castSpell:{spellId:{itemId:13443}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"65%"}}}}]}},castSpell:{spellId:{itemId:12662}}}},{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:7659}}}}},castSpell:{spellId:{spellId:7659}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"1.5"}}}},castSpell:{spellId:{spellId:18870,rank:5}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3.5"}}}},castSpell:{spellId:{spellId:17922,rank:5}}}},{action:{castSpell:{spellId:{spellId:436479}}}},{action:{castSpell:{spellId:{spellId:18930}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}},multidot:{spellId:{spellId:11667,rank:6},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{castSpell:{spellId:{spellId:403629}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"10%"}}}},castSpell:{spellId:{spellId:11688,rank:5}}}},{action:{castSpell:{spellId:{spellId:412758}}}}]},ve={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:427726}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:18288}}},doAtValue:{const:{val:"-5s"}}},{action:{castSpell:{spellId:{spellId:11659,rank:7}}},doAtValue:{const:{val:"-2.5"}}}],priorityList:[{hide:!0,action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:7659}}}}},castSpell:{spellId:{spellId:7659}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"75%"}}}}]}},castSpell:{spellId:{itemId:13443}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"65%"}}}}]}},castSpell:{spellId:{itemId:12662}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"1.5"}}}},castSpell:{spellId:{spellId:18870,rank:5}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3.5"}}}},castSpell:{spellId:{spellId:17922,rank:5}}}},{action:{condition:{auraIsActive:{auraId:{spellId:17941}}},castSpell:{spellId:{spellId:11659,rank:7}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{currentTime:{}},rhs:{const:{val:"1.5s"}}}},castSpell:{spellId:{spellId:446297}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:446297}}}},{action:{castSpell:{spellId:{spellId:403501}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}},multidot:{spellId:{spellId:11699,rank:5},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}},multidot:{spellId:{spellId:11671,rank:5},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}},multidot:{spellId:{spellId:11667,rank:6},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}},multidot:{spellId:{spellId:11712,rank:5},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"10%"}}}},castSpell:{spellId:{spellId:11688,rank:5}}}},{action:{castSpell:{spellId:{spellId:11659,rank:7}}}}]},Se={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:18288}}},doAtValue:{const:{val:"-5s"}}},{action:{castSpell:{spellId:{spellId:11661,rank:9}}},doAtValue:{const:{val:"-2.5"}}}],priorityList:[{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"75%"}}}}]}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"65%"}}}}]}},castSpell:{spellId:{itemId:12662}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"0.5s"}}}},castSpell:{spellId:{spellId:18871,rank:6}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3.5s"}}}},channelSpell:{spellId:{spellId:11675,rank:4},interruptIf:{gcdIsReady:{}}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{warlockCurrentPetMana:{}},rhs:{const:{val:"800"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:11689,rank:6}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}},multidot:{spellId:{spellId:11713,rank:6},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{castSpell:{spellId:{spellId:403501}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}},multidot:{spellId:{spellId:427717},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}},multidot:{spellId:{spellId:11700,rank:6},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}},multidot:{spellId:{spellId:426320},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}},strictSequence:{actions:[{castSpell:{spellId:{spellId:448686}}},{multidot:{spellId:{spellId:11672,rank:6},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}]}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentManaPercent:{}},rhs:{const:{val:"10%"}}}},castSpell:{spellId:{spellId:11689,rank:6}}}},{action:{castSpell:{spellId:{spellId:11661,rank:9}}}}]},ge={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:412758}}},doAtValue:{const:{val:"-2.25s"}}}],priorityList:[{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"75%"}}}},{isExecutePhase:{threshold:"E35"}}]}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"15s"}}}},{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"60%"}}}},{isExecutePhase:{threshold:"E35"}}]}},castSpell:{spellId:{itemId:12662}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:440892}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:449432}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"60s"}}}}]}},castSpell:{spellId:{spellId:449432}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:440892}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11713,rank:6}}}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:449432}}}}}]}},castSpell:{spellId:{spellId:11713,rank:6}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:440892}}}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11717,rank:4}}}}}]}},castSpell:{spellId:{spellId:11717,rank:4}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"1.5"}}}},castSpell:{spellId:{spellId:18871,rank:6}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3.5"}}}},castSpell:{spellId:{spellId:17923,rank:6}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{warlockCurrentPetMana:{}},rhs:{const:{val:"800"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10"}}}}]}},castSpell:{spellId:{spellId:11689,rank:6}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:427713}}},{runeIsEquipped:{runeId:{spellId:440870}}},{or:{vals:[{and:{vals:[{isExecutePhase:{threshold:"E35"}},{not:{val:{auraIsActive:{auraId:{spellId:427714}}}}}]}},{not:{val:{isExecutePhase:{threshold:"E35"}}}}]}}]}},castSpell:{spellId:{spellId:18932,rank:4}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:427713}}},{not:{val:{runeIsEquipped:{runeId:{spellId:440870}}}}}]}},castSpell:{spellId:{spellId:18932,rank:4}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:427713}}},{runeIsEquipped:{runeId:{spellId:426320}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},multidot:{spellId:{spellId:426320},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:427713}}},{not:{val:{runeIsEquipped:{runeId:{spellId:426320}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},multidot:{spellId:{spellId:11668,rank:7},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:440870}}},{isExecutePhase:{threshold:"E20"}},{or:{vals:[{and:{vals:[{runeIsEquipped:{runeId:{spellId:427713}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:412758}}},rhs:{const:{val:"1.8s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:440873}}},rhs:{const:{val:"1.8s"}}}}]}},{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:427713}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:412758}}},rhs:{const:{val:"2.25s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:440873}}},rhs:{const:{val:"2.25s"}}}}]}}]}}]}},castSpell:{spellId:{spellId:412758}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:440870}}},{isExecutePhase:{threshold:"E35"}},{or:{vals:[{and:{vals:[{runeIsEquipped:{runeId:{spellId:427713}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:412758}}},rhs:{const:{val:"1.85s"}}}},{auraIsActive:{auraId:{spellId:440873}}}]}},{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:427713}}}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:412758}}},rhs:{const:{val:"2.41s"}}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:440873}}},rhs:{const:{val:"2.41s"}}}}]}}]}}]}},castSpell:{spellId:{spellId:17924,rank:2}}}},{action:{condition:{or:{vals:[{and:{vals:[{runeIsEquipped:{runeId:{spellId:440870}}},{not:{val:{isExecutePhase:{threshold:"E35"}}}}]}},{not:{val:{runeIsEquipped:{runeId:{spellId:440870}}}}}]}},castSpell:{spellId:{spellId:403629}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:427713}}}}},{runeIsEquipped:{runeId:{spellId:426320}}},{or:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:440870}}}}},{and:{vals:[{runeIsEquipped:{runeId:{spellId:440870}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}},{not:{val:{isExecutePhase:{threshold:"E35"}}}}]}}]}}]}},multidot:{spellId:{spellId:426325},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:427713}}}}},{not:{val:{runeIsEquipped:{runeId:{spellId:426320}}}}},{or:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:440870}}}}},{and:{vals:[{runeIsEquipped:{runeId:{spellId:440870}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}},{not:{val:{isExecutePhase:{threshold:"E35"}}}}]}}]}}]}},multidot:{spellId:{spellId:11668,rank:7},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:427713}}}}},{or:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:440870}}}}},{and:{vals:[{runeIsEquipped:{runeId:{spellId:440870}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}},{not:{val:{isExecutePhase:{threshold:"E35"}}}}]}}]}}]}},multidot:{spellId:{spellId:11672,rank:6},maxDots:1,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentManaPercent:{}},rhs:{const:{val:"10%"}}}},castSpell:{spellId:{spellId:11689,rank:6}}}},{action:{castSpell:{spellId:{spellId:412758}}}}]},Oe={items:[{id:215111},{id:213345},{id:213301},{id:216620},{id:215377,enchant:866,rune:403666},{id:19597,enchant:905},{id:10019,rune:403629},{id:213321,rune:426301},{id:215379,rune:412758},{id:215378,enchant:911,rune:412732},{id:213283},{id:19524},{id:213347},{id:216509},{id:213410,enchant:7210},{id:15107},{id:213559}]},Pe={items:[{id:215111},{id:213345},{id:213301},{id:216620},{id:215377,enchant:866,rune:412727},{id:19597,enchant:905},{id:10019,rune:403629},{id:213321,rune:426301},{id:215379,rune:412758},{id:215378,enchant:911,rune:412732},{id:213283},{id:216508},{id:213347},{id:211450},{id:213410,enchant:7210},{id:15107},{id:213559}]},Te={items:[{id:215111},{id:213345},{id:213301},{id:216620},{id:215377,enchant:866,rune:403668},{id:19597,enchant:905},{id:10019,rune:403501},{id:20098,rune:426301},{id:215379,rune:412689},{id:215378,enchant:911,rune:412732},{id:213283},{id:216507},{id:213347},{id:211450},{id:213410,enchant:7210},{id:15108},{id:213559}]},ke={items:[{id:220523,enchant:1509,rune:427713},{id:220623},{id:220750,enchant:7325},{id:220611},{id:220680,enchant:928,rune:412727},{id:220538,enchant:1883,rune:427726},{id:220548,rune:403629},{id:223192,rune:426301},{id:220679,enchant:1509,rune:412758},{id:220681,enchant:911,rune:412732},{id:220628},{id:223985},{id:216509},{id:223195},{id:220586},{id:220599},{id:220604}]},fe={items:[{id:220523,enchant:1509,rune:427712},{id:220623},{id:220750,enchant:7325},{id:220611},{id:220535,enchant:928,rune:403668},{id:19596,enchant:1883,rune:427726},{id:220548,rune:403501},{id:223192,rune:426301},{id:220679,enchant:1509,rune:425464},{id:220681,enchant:911,rune:412732},{id:220628},{id:223985},{id:220634},{id:216509},{id:220586},{id:220598},{id:220604}]},Le={items:[{id:226549,enchant:2544,rune:427712},{id:228289},{id:226550,enchant:7325},{id:227869,enchant:2463,rune:403511},{id:226548,enchant:1891,rune:403668},{id:226553,enchant:1884,rune:427717},{id:226552,rune:403501},{id:226905,rune:426316},{id:226547,enchant:2544,rune:412689},{id:226908,enchant:911,rune:426320},{id:228287,rune:442897},{id:228687,rune:442894},{id:228255},{id:223214},{id:228269,enchant:2504},{id:220598},{id:13396}]},Ae={items:[{id:226909,enchant:2544,rune:427713},{id:228289},{id:227808,enchant:7325},{id:22330,enchant:2463,rune:440870},{id:226548,enchant:1891,rune:412727},{id:226553,enchant:1884,rune:412758},{id:226552,rune:403629},{id:228190,rune:426316},{id:226547,enchant:2544,rune:425464},{id:226908,enchant:911,rune:440892},{id:228287,rune:442897},{id:228683,rune:442894},{id:223195},{id:228255},{id:228269,enchant:2504},{id:19311},{id:220604}]},xe=e("Destruction",{items:[{id:211842},{id:209686},{id:215365},{id:9822,randomSuffix:1880},{id:209671,enchant:847,rune:403666},{id:210781,enchant:723},{id:14191,randomSuffix:1882,rune:403629},{id:6611,randomSuffix:1882},{id:209684,rune:412758},{id:209669},{id:20431},{id:209668},{id:21566},{id:211450},{id:209561,enchant:723},{},{id:209674}]},{customCondition:e=>25==e.getLevel()}),ye=e("P2 Fire Imp",Oe,{customCondition:e=>40==e.getLevel()}),Ee=e("P2 Fire Succubus",Pe,{customCondition:e=>40==e.getLevel()}),Ce=e("P2 Shadow",Te,{customCondition:e=>40==e.getLevel()}),Ge=e("P3 Backdraft",ke,{customCondition:e=>50==e.getLevel()}),De=e("P3 NF/Ruin",fe,{customCondition:e=>50==e.getLevel()}),we=e("P4 Aff",Le,{customCondition:e=>60==e.getLevel()}),qe=e("P4 Destro",Ae,{customCondition:e=>60==e.getLevel()}),Me={[G.Phase1]:[xe],[G.Phase2]:[ye,Ee,Ce],[G.Phase3]:[De,Ge],[G.Phase4]:[we,qe],[G.Phase5]:[]},Re=we,Ue=qe,be=Ue,We=a("Destruction",ce,{customCondition:e=>25==e.getLevel()}),Fe=a("P2 Destro Imp",me,{customCondition:e=>40==e.getLevel()}),Be=a("P2 Destro Conflag",Ie,{customCondition:e=>40==e.getLevel()}),Ve=a("P2 Demonology",ue,{customCondition:e=>40==e.getLevel()}),He=a("P2 Affliction",de,{customCondition:e=>40==e.getLevel()}),je=a("P3 Backdraft",he,{customCondition:e=>50==e.getLevel()}),ze=a("P3 NF/Ruin",ve,{customCondition:e=>50==e.getLevel()}),Ne=a("P4 Destro",ge,{customCondition:e=>60==e.getLevel()}),_e=a("P4 Aff",Se,{customCondition:e=>60==e.getLevel()}),Ke={[G.Phase1]:[We],[G.Phase2]:[Fe,Be,Ve,He],[G.Phase3]:[ze,je],[G.Phase4]:[_e,Ne],[G.Phase5]:[]},Je={25:{0:We,1:We,2:We},40:{0:He,1:Ve,2:Fe},50:{0:ze,2:je},60:{0:_e,2:Ne}},Qe={name:"P1 Destruction",data:D.create({talentsString:"-03-0550201"}),enableWhen:e=>25==e.getLevel()},Xe={name:"P2 Destro Imp",data:D.create({talentsString:"-01-055020512000415"}),enableWhen:e=>40==e.getLevel()},Ye={name:"P2 Destro Conflag",data:D.create({talentsString:"--0550205120005141"}),enableWhen:e=>40==e.getLevel()},Ze={name:"P2 Demonology",data:D.create({talentsString:"-2050033132501051"}),enableWhen:e=>40==e.getLevel()},$e={name:"P2 Affliction",data:D.create({talentsString:"3500253012201105--1"}),enableWhen:e=>40==e.getLevel()},ea={name:"P3 Backdraft",data:D.create({talentsString:"-032004-5050205102005151"}),enableWhen:e=>50==e.getLevel()},aa={name:"P3 NF/Ruin",data:D.create({talentsString:"25002500102-03-50502051020001"}),enableWhen:e=>50==e.getLevel()},la={name:"P4 Aff",data:D.create({talentsString:"4500253012201005--50502051020001"}),enableWhen:e=>60==e.getLevel()},na={name:"P4 Destro",data:D.create({talentsString:"05002-035-5250205122005151"}),enableWhen:e=>60==e.getLevel()},sa={[G.Phase1]:[Qe],[G.Phase2]:[Xe,Ye,Ze,$e],[G.Phase3]:[aa,ea],[G.Phase4]:[la,na],[G.Phase5]:[]},ta=sa[G.Phase4][0],ia=sa[G.Phase4][1],oa=ia,pa=l("Aff",Re,ta,Je[60][0]),ra=l("Destro",Ue,ia,Je[60][2]),ca=w.create({armor:q.FelArmor,summon:M.Imp,weaponImbue:R.NoWeaponImbue}),da=U.create({alcohol:b.AlcoholKreegsStoutBeatdown,defaultPotion:W.MajorManaPotion,defaultConjured:F.ConjuredDemonicRune,enchantedSigil:B.FlowingWatersSigil,flask:V.FlaskOfSupremePower,firePowerBuff:H.ElixirOfGreaterFirepower,food:j.FoodTenderWolfSteak,mainHandImbue:z.WizardOil,manaRegenElixir:N.MagebloodPotion,miscConsumes:{jujuEmber:!0},spellPowerBuff:_.GreaterArcaneElixir,shadowPowerBuff:K.ElixirOfShadowPower,zanzaBuff:J.GizzardGum}),ua=Q.create({arcaneBrilliance:!0,aspectOfTheLion:!0,demonicPact:80,divineSpirit:!0,fireResistanceAura:!0,fireResistanceTotem:!0,giftOfTheWild:X.TristateEffectImproved,manaSpringTotem:X.TristateEffectRegular,moonkinAura:!0,powerWordFortitude:X.TristateEffectImproved,vampiricTouch:300}),Ia=Y.create({blessingOfKings:!0,blessingOfWisdom:X.TristateEffectImproved,mightOfStormwind:!0,moldarsMoxie:!0,rallyingCryOfTheDragonslayer:!0,saygesFortune:Z.SaygesDamage,slipkiksSavvy:!0,songflowerSerenade:!0,valorOfAzeroth:!0,warchiefsBlessing:!0}),ma=$.create({faerieFire:!0,homunculi:100,improvedFaerieFire:!0,improvedScorch:!0,judgementOfWisdom:!0,markOfChaos:!0,occultPoison:!0,shadowWeaving:!0}),ha={distanceFromTarget:25,profession1:ee.Enchanting,profession2:ee.Tailoring,channelClipDelay:150},va=n(te.SpecWarlock,{cssClass:"warlock-sim-ui",cssScheme:"warlock",knownIssues:[],epStats:[ae.StatIntellect,ae.StatStamina,ae.StatSpirit,ae.StatSpellPower,ae.StatSpellDamage,ae.StatFirePower,ae.StatShadowPower,ae.StatSpellHit,ae.StatSpellCrit,ae.StatSpellHaste,ae.StatMP5,ae.StatFireResistance],epReferenceStat:ae.StatSpellPower,displayStats:[ae.StatHealth,ae.StatMana,ae.StatIntellect,ae.StatStamina,ae.StatSpirit,ae.StatSpellPower,ae.StatSpellDamage,ae.StatFirePower,ae.StatShadowPower,ae.StatSpellHit,ae.StatSpellCrit,ae.StatSpellHaste,ae.StatMP5,ae.StatFireResistance],defaults:{gear:be.gear,epWeights:s.fromMap({[ae.StatIntellect]:.18,[ae.StatSpirit]:.54,[ae.StatSpellPower]:1,[ae.StatSpellDamage]:1,[ae.StatFirePower]:1,[ae.StatShadowPower]:1,[ae.StatSpellHit]:.93,[ae.StatSpellCrit]:.53,[ae.StatSpellHaste]:.81,[ae.StatStamina]:.01,[ae.StatFireResistance]:.5}),consumes:da,talents:oa.data,specOptions:ca,raidBuffs:ua,partyBuffs:le.create({}),individualBuffs:Ia,debuffs:ma,other:ha},playerIconInputs:[A(),x(),y(),E()],includeBuffDebuffInputs:[t,i,o,p,r,c,d,u,I,m,h],excludeBuffDebuffInputs:[v,S,...g],petConsumeInputs:[O,P,T],otherInputs:{inputs:[C(),k,f]},itemSwapConfig:{itemSlots:[ne.ItemSlotMainHand,ne.ItemSlotOffHand,ne.ItemSlotRanged]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[...sa[G.Phase4],...sa[G.Phase3],...sa[G.Phase2],...sa[G.Phase1]],rotations:[...Ke[G.Phase4],...Ke[G.Phase3],...Ke[G.Phase2],...Ke[G.Phase1]],gear:[...Me[G.Phase4],...Me[G.Phase3],...Me[G.Phase2],...Me[G.Phase1]],builds:[pa,ra]},autoRotation:e=>{const a=e.getLevel();if(a<50)return Je[e.getLevel()][e.getTalentTree()].rotation.rotation;const l=e.getEquippedItem(ne.ItemSlotWrist)?.rune?.id==se.RuneBracerIncinerate;return Je[a][l?2:0].rotation.rotation},raidSimPresets:[{spec:te.SpecWarlock,tooltip:"Destruction DPS",defaultName:"Destruction",iconUrl:ie(oe.ClassWarlock,2),talents:Xe.data,specOptions:ca,consumes:da,defaultFactionRaces:{[pe.Unknown]:re.RaceUnknown,[pe.Alliance]:re.RaceHuman,[pe.Horde]:re.RaceOrc},defaultGear:{[pe.Unknown]:{},[pe.Alliance]:{1:ye.gear},[pe.Horde]:{1:ye.gear}},otherDefaults:ha}]});class Sa extends L{constructor(e,a){super(e,a,va)}}export{Sa as W};
