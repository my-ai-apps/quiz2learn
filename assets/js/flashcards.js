
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
const _0x14347a=_0x349b;(function(_0xa2a7d1,_0x20363e){const _0x220a2d=_0x349b,_0x1076be=_0xa2a7d1();while(!![]){try{const _0x10f729=parseInt(_0x220a2d(0x1a7))/0x1+parseInt(_0x220a2d(0x167))/0x2+parseInt(_0x220a2d(0x17e))/0x3+-parseInt(_0x220a2d(0x1f5))/0x4+-parseInt(_0x220a2d(0x16a))/0x5*(parseInt(_0x220a2d(0x155))/0x6)+parseInt(_0x220a2d(0x1cf))/0x7+parseInt(_0x220a2d(0x175))/0x8*(-parseInt(_0x220a2d(0x1e1))/0x9);if(_0x10f729===_0x20363e)break;else _0x1076be['push'](_0x1076be['shift']());}catch(_0x5bdb68){_0x1076be['push'](_0x1076be['shift']());}}}(_0x4bd8,0x9f020));import _0x5ae498 from'./store.js';import{quizStateManager}from'./QuizStateManager.js';let quizDataQuestions=[],quizMode=_0x14347a(0x19b),multipleOptionSelectedAnswer=null;function _0x349b(_0x1f3051,_0x14a2e0){const _0x4bd8e2=_0x4bd8();return _0x349b=function(_0x349b72,_0x12dabd){_0x349b72=_0x349b72-0x145;let _0xf05b5c=_0x4bd8e2[_0x349b72];return _0xf05b5c;},_0x349b(_0x1f3051,_0x14a2e0);}function _0x4bd8(){const _0x394e7d=['761409mUpvzq','startHandsFreeMode','blNlM','correctAnswer','selected','block','quizQuestionIncorrect','KDlKl','zvdCV','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22results\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>Quiz\x20Completed!</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Your\x20results:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22score\x22>','BiALa','nIlTd','gQJTP','getCurrentQuestionIndex','btnNextCard','classList','error','quizSystemError','pqlkg','YAcCb','MiDlb','OfOxW','Fsomo','title','.favorite-icon','insertBefore','jDfWZ','option','KKxTb','AlLft','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Correct:\x20','feedback-message\x20p-4\x20rounded-md\x20mb-4\x20','error-message\x20p-4\x20bg-red-100\x20text-red-700\x20rounded-md\x20mb-4','iPltK','PxiVH','wHIHu','TijuF','nKQIu','EdgKZ','cardNumber','7314587VjcWTM','pRcOn','filter','nextCard','quizQuestionChanged','textContent','active','wgsVj','Question\x20answered\x20incorrectly:','wQFvn','retryQuestion','window.nextCard:\x20Calling\x20nextQuestion','add','BPYRo','lQzkm','length','split','gaaFb','108zWKQBp','getCurrentQuiz','xqGnL','IMUJl','getElementById','quobd','innerHTML','fxReB','querySelector','Vbalf','prevQuestion','message','UfviA','Fbfxi','getItem','mode','EyiKJ','Quiz\x20system\x20error\x20received:','WKNZt','search','3290004tXJDZs','pHRXr','Flip\x20card','play','zVPFU','dMINL','PWFnQ','options','TCCYt','cardBack','showQuizEndSummary','createElement','addEventListener','floor','remove','setItem','ASInP','none','trainingMode','display','nextQuestion','GNzAs','quizData','kdtWn','tdKFm','btnPrevCard','setCurrentQuiz','incorrectQuestions','stopPropagation','lsysA','Error\x20loading\x20quiz\x20data:','WhBuC','iBXDd','style','main-content','parse','target','className','log','6gucjMV','appendChild','progress-bar','forEach','random','xGWCa','\x20/\x20','Starting\x20hands-free\x20mode','default','tfehU','Event\x20listener\x20-\x20Quiz\x20End:','anQRY','detail','OFWdg','tfINx','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Incorrect:\x20','Quiz\x20data\x20loaded:','hSDvy','764196NwyGpm','dYoKB','getCurrentQuestion','3581885eESfOL','change','Rdndf','div','then','NwQbx','DvZEe','flipped','width','parentNode','contains','813712HjSlmR','isTrainingMode','querySelectorAll','qcbsA','ppOdV','azbiW','correct','prevCard','TIogN','3666882jWEzlW','score','aGMIX','VhOnR','WtaDd','ysofC','CriKB','location','kGUao','incorrect','FZALI','hbonD','btnRestartQuiz','toggle','handsFreeMode','ysjXN','stringify','MUXfR','No\x20deck\x20ID\x20provided\x20in\x20the\x20query\x20string.','ctLmb','.error-message','lpjFj','get','RGAqm','checked','removeEventListener','elEjb','catch','BFVjn','flashcard','question','Question\x20answered\x20correctly:','click','lqKch','Question\x20changed:','questions','quizEnd','\x0a\x20\x20\x20\x20\x20\x20<button\x20class=\x22ml-4\x20px-2\x20py-1\x20bg-red-200\x20rounded\x20hover:bg-red-300\x22\x20onclick=\x22retryQuestion()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Retry\x20Question\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20','dlcjv','getElementsByClassName','showFlashcardResult'];_0x4bd8=function(){return _0x394e7d;};return _0x4bd8();}const initQuizData=()=>{const _0x46c4aa=_0x14347a,_0xa7cc5a={'elEjb':'quizData'};if(!_0x5ae498[_0x46c4aa(0x1ef)](_0xa7cc5a[_0x46c4aa(0x198)])){const _0x2d70ef={'quizHistory':[],'correctAnswers':0x0,'incorrectAnswers':0x0,'selectedQuestion':0x0,'isQuestion':!![],'selectedDeck':null,'decks':[],'incorrectQuestions':[],'isTrainingMode':![],'quizMode':_0x46c4aa(0x19b)};_0x5ae498[_0x46c4aa(0x204)](_0xa7cc5a[_0x46c4aa(0x198)],JSON[_0x46c4aa(0x18e)](_0x2d70ef));}},loadQuizData=()=>{const _0x399bc9=_0x14347a,_0x2b1dc8={'kzCPJ':_0x399bc9(0x20b)};return JSON[_0x399bc9(0x151)](_0x5ae498[_0x399bc9(0x1ef)](_0x2b1dc8['kzCPJ']));},saveQuizData=_0x55f783=>{const _0x2187a7=_0x14347a,_0x5508a8={'dvsUu':'quizData'};_0x5ae498[_0x2187a7(0x204)](_0x5508a8['dvsUu'],JSON['stringify'](_0x55f783));},shuffleQuestions=()=>{const _0x7f3bc6=_0x14347a,_0x21b984={'qtfwM':function(_0x298620,_0x2a0de1){return _0x298620-_0x2a0de1;},'hSDvy':function(_0x3443b9,_0x1faaf5){return _0x3443b9+_0x1faaf5;},'FZALI':function(_0x4ac779,_0x4cd738){return _0x4ac779(_0x4cd738);}},_0x25b3dc=quizStateManager[_0x7f3bc6(0x1e2)](),_0x556c66=[..._0x25b3dc];for(let _0x43b4e3=_0x21b984['qtfwM'](_0x556c66[_0x7f3bc6(0x1de)],0x1);_0x43b4e3>0x0;_0x43b4e3--){const _0x468e25=Math[_0x7f3bc6(0x202)](Math[_0x7f3bc6(0x159)]()*_0x21b984[_0x7f3bc6(0x166)](_0x43b4e3,0x1));[_0x556c66[_0x43b4e3],_0x556c66[_0x468e25]]=[_0x556c66[_0x468e25],_0x556c66[_0x43b4e3]];}quizStateManager[_0x7f3bc6(0x148)](_0x556c66),_0x21b984[_0x7f3bc6(0x188)](updateCard,quizStateManager[_0x7f3bc6(0x169)]());},toggleTrainingMode=_0x5395f0=>{const _0x1bc648=_0x14347a,_0x2b1b95={'NTbtC':function(_0x25a228,_0x18c67f){return _0x25a228>_0x18c67f;},'pRcOn':function(_0x37cfae,_0x472896){return _0x37cfae(_0x472896);}},_0x3099df=loadQuizData();_0x3099df[_0x1bc648(0x176)]=_0x5395f0,_0x5395f0&&_0x2b1b95['NTbtC'](_0x3099df['incorrectQuestions'][_0x1bc648(0x1de)],0x0)?(quizStateManager[_0x1bc648(0x148)](_0x3099df[_0x1bc648(0x149)]),updateCard(quizStateManager[_0x1bc648(0x169)]())):(quizStateManager['setCurrentQuiz'](quizDataQuestions),_0x2b1b95[_0x1bc648(0x1d0)](updateCard,quizStateManager[_0x1bc648(0x169)]())),_0x2b1b95[_0x1bc648(0x1d0)](saveQuizData,_0x3099df);},setupErrorHandling=()=>{const _0x19bd4a=_0x14347a,_0x555e81={'qcbsA':_0x19bd4a(0x1f2),'Fsomo':_0x19bd4a(0x16d),'BFVjn':_0x19bd4a(0x1c7),'wQFvn':'flashcard','gQJTP':function(_0x2a8386,_0x407906,_0x55c526){return _0x2a8386(_0x407906,_0x55c526);},'ctLmb':_0x19bd4a(0x1b8)};window['addEventListener'](_0x555e81[_0x19bd4a(0x191)],_0x283359=>{const _0x31d929=_0x19bd4a;console[_0x31d929(0x154)](_0x555e81[_0x31d929(0x178)],_0x283359[_0x31d929(0x161)]);const _0x33f113=document['createElement'](_0x555e81[_0x31d929(0x1bd)]);_0x33f113['className']=_0x555e81[_0x31d929(0x19a)],_0x33f113['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20<strong>System\x20Error:</strong>\x20'+_0x283359[_0x31d929(0x161)][_0x31d929(0x1ec)]+_0x31d929(0x1a3);const _0x5693ad=document['getElementById'](_0x555e81[_0x31d929(0x1d8)]);_0x5693ad['parentNode'][_0x31d929(0x1c0)](_0x33f113,_0x5693ad),_0x555e81[_0x31d929(0x1b3)](setTimeout,()=>{const _0x40373d=_0x31d929;_0x33f113[_0x40373d(0x173)]&&_0x33f113['remove']();},0x1388);});},flipCard=()=>{const _0x2506cd=_0x14347a,_0x5bc97e={'iBXDd':_0x2506cd(0x19b),'ykYwk':_0x2506cd(0x171)},_0x3552ce=document[_0x2506cd(0x1e5)](_0x5bc97e[_0x2506cd(0x14e)]);console[_0x2506cd(0x154)](_0x2506cd(0x1f7),_0x3552ce[_0x2506cd(0x1d4)]),_0x3552ce['classList']['toggle'](_0x5bc97e['ykYwk']);},showFeedback=_0x43a4a1=>{const _0x44fff5=_0x14347a,_0x36567b={'quobd':function(_0x2a60ad){return _0x2a60ad();},'pYizz':_0x44fff5(0x16d),'QmCxr':function(_0x4aa940,_0x4ee96f){return _0x4aa940===_0x4ee96f;},'DvZEe':_0x44fff5(0x17b),'AlLft':'bg-green-100\x20text-green-700','WhBuC':'bg-yellow-100\x20text-yellow-700','Rdndf':function(_0x509ed1,_0x8df17e){return _0x509ed1===_0x8df17e;},'IMUJl':'Correct!','TIogN':_0x44fff5(0x19b),'lqKch':_0x44fff5(0x171),'fxReB':_0x44fff5(0x1a6),'Fbfxi':'./assets/sounds/you-win-sequence-1.mp3','EoKlj':function(_0x59e8c7,_0x1dc3c0,_0x212e67){return _0x59e8c7(_0x1dc3c0,_0x212e67);}},_0x4d6dc2=document[_0x44fff5(0x200)](_0x36567b['pYizz']);_0x4d6dc2[_0x44fff5(0x153)]=_0x44fff5(0x1c6)+(_0x36567b['QmCxr'](_0x43a4a1,_0x36567b[_0x44fff5(0x170)])?_0x36567b[_0x44fff5(0x1c4)]:_0x36567b[_0x44fff5(0x14d)]),_0x4d6dc2['textContent']=_0x36567b[_0x44fff5(0x16c)](_0x43a4a1,_0x44fff5(0x17b))?_0x36567b[_0x44fff5(0x1e4)]:'Incorrect.\x20Try\x20again!';const _0x1490e9=document[_0x44fff5(0x1e5)](_0x36567b[_0x44fff5(0x17d)]);!_0x1490e9[_0x44fff5(0x1b6)]['contains'](_0x36567b[_0x44fff5(0x19f)])&&_0x36567b[_0x44fff5(0x1e6)](flipCard);const _0x5468e7=document[_0x44fff5(0x1e5)](_0x36567b[_0x44fff5(0x1e8)]);_0x5468e7['parentNode'][_0x44fff5(0x1c0)](_0x4d6dc2,_0x5468e7);const _0x3e65a2=new Audio(_0x36567b[_0x44fff5(0x1ee)]);_0x3e65a2[_0x44fff5(0x1f8)](),_0x36567b['EoKlj'](setTimeout,()=>{const _0x5ed3b6=_0x44fff5;_0x4d6dc2[_0x5ed3b6(0x173)]&&(_0x4d6dc2[_0x5ed3b6(0x203)](),_0x1490e9[_0x5ed3b6(0x1b6)][_0x5ed3b6(0x174)](_0x5ed3b6(0x171))&&_0x36567b[_0x5ed3b6(0x1e6)](flipCard));},0x7d0);};window[_0x14347a(0x1d9)]=()=>{const _0x587814=_0x14347a,_0x10fe94={'nIlTd':_0x587814(0x192)},_0x129e96=document[_0x587814(0x177)](_0x10fe94[_0x587814(0x1b2)]);_0x129e96['forEach'](_0x103119=>_0x103119[_0x587814(0x203)]()),quizStateManager['retryCurrentQuestion']();},window[_0x14347a(0x1d2)]=()=>{const _0x4d7880=_0x14347a,_0x195e04={'MiDlb':_0x4d7880(0x1da)};console[_0x4d7880(0x154)](_0x195e04[_0x4d7880(0x1bb)]),quizStateManager[_0x4d7880(0x209)]();},window[_0x14347a(0x17c)]=()=>{const _0x4bfb22=_0x14347a;quizStateManager[_0x4bfb22(0x1eb)]();};const init=()=>{const _0xc90823=_0x14347a,_0x582407={'Mdurk':'0|3|4|1|2|5','MUXfR':function(_0x3d49e3,_0x1a99f4){return _0x3d49e3==_0x1a99f4;},'NwQbx':'flashcard','WKNZt':_0xc90823(0x1ac),'zVPFU':_0xc90823(0x206),'GNzAs':function(_0x4aa9db,_0x2d9d04){return _0x4aa9db(_0x2d9d04);},'vdYmD':_0xc90823(0x14c),'WtaDd':function(_0x35b5b3){return _0x35b5b3();},'jDfWZ':function(_0x1de42f){return _0x1de42f();},'nKQIu':_0xc90823(0x165),'azbiW':_0xc90823(0x190),'KDlKl':function(_0x5c6ba7){return _0x5c6ba7();}};_0x582407[_0xc90823(0x182)](initQuizData);const _0x9e7270=_0x582407[_0xc90823(0x1c1)](loadQuizData);console['log'](_0x582407[_0xc90823(0x1cc)],_0x9e7270);const _0x345420=new URLSearchParams(window[_0xc90823(0x185)][_0xc90823(0x1f4)]),_0x1a16a9=_0x345420[_0xc90823(0x194)]('q');quizMode=_0x345420[_0xc90823(0x194)](_0xc90823(0x1f0));const _0x4831d7=document[_0xc90823(0x1e5)]('deckTitle'),_0xe15226=document[_0xc90823(0x1e5)](_0x582407[_0xc90823(0x16f)]),_0x2b9bdc=document[_0xc90823(0x1e5)]('multipleOptionsCard');_0x1a16a9?import(_0x1a16a9)[_0xc90823(0x16e)](_0x299b13=>{const _0x1eaf73=_0xc90823,_0x5da132=_0x582407['Mdurk'][_0x1eaf73(0x1df)]('|');let _0x292722=0x0;while(!![]){switch(_0x5da132[_0x292722++]){case'0':quizDataQuestions=_0x299b13[_0x1eaf73(0x15d)][_0x1eaf73(0x1a1)];continue;case'1':quizStateManager[_0x1eaf73(0x148)](quizDataQuestions);continue;case'2':_0x582407[_0x1eaf73(0x18f)](quizMode,_0x582407[_0x1eaf73(0x16f)])?(_0xe15226[_0x1eaf73(0x14f)]['display']=_0x582407[_0x1eaf73(0x1f3)],_0x2b9bdc[_0x1eaf73(0x14f)]['display']=_0x582407['zVPFU']):(_0xe15226[_0x1eaf73(0x14f)][_0x1eaf73(0x208)]=_0x582407[_0x1eaf73(0x1f9)],_0x2b9bdc[_0x1eaf73(0x14f)][_0x1eaf73(0x208)]=_0x582407[_0x1eaf73(0x1f3)]);continue;case'3':document[_0x1eaf73(0x1be)]=_0x299b13[_0x1eaf73(0x15d)][_0x1eaf73(0x1be)];continue;case'4':_0x4831d7[_0x1eaf73(0x1d4)]=_0x299b13[_0x1eaf73(0x15d)]['title'];continue;case'5':_0x582407[_0x1eaf73(0x20a)](updateCard,quizStateManager['getCurrentQuestion']());continue;}break;}})[_0xc90823(0x199)](_0x36834f=>{const _0x582a9c=_0xc90823;console[_0x582a9c(0x1b7)](_0x582407['vdYmD'],_0x36834f);}):console['error'](_0x582407[_0xc90823(0x17a)]),_0x582407[_0xc90823(0x1ae)](setupErrorHandling);};function updateCard(_0x77b315){const _0x19222d=_0x14347a,_0x1b3d1e={'PWFnQ':_0x19222d(0x19b),'ysjXN':function(_0xed1288,_0x3b2462){return _0xed1288(_0x3b2462);},'gaaFb':_0x19222d(0x1ce),'anQRY':function(_0x41259c,_0x1956d8){return _0x41259c+_0x1956d8;}};quizMode===_0x1b3d1e[_0x19222d(0x1fb)]?_0x1b3d1e[_0x19222d(0x18d)](updateFlashcard,_0x77b315):updateMultipleOptionsCard(_0x77b315),document[_0x19222d(0x1e5)](_0x1b3d1e[_0x19222d(0x1e0)])['textContent']=_0x1b3d1e[_0x19222d(0x160)](quizStateManager['getCurrentQuestionIndex'](),0x1)+'/'+quizStateManager['getCurrentQuiz']()['length'];}function updateMultipleOptionsCard(_0x4f9594){const _0x562d2b=_0x14347a,_0x10a297={'KKxTb':_0x562d2b(0x1c2),'ppOdV':_0x562d2b(0x19e),'EcmQl':'multiple-options-question','pqlkg':_0x562d2b(0x1fc)},_0x262911=document[_0x562d2b(0x1e5)](_0x10a297['EcmQl']),_0x9d515e=document[_0x562d2b(0x1e5)](_0x10a297[_0x562d2b(0x1b9)]);_0x262911[_0x562d2b(0x1d4)]=_0x4f9594[_0x562d2b(0x19c)],_0x9d515e[_0x562d2b(0x1e7)]='',_0x4f9594[_0x562d2b(0x1fc)][_0x562d2b(0x158)](_0x3e812b=>{const _0x278d27=_0x562d2b,_0x2ddbe6=document['createElement'](_0x278d27(0x16d));_0x2ddbe6[_0x278d27(0x1b6)][_0x278d27(0x1db)](_0x10a297[_0x278d27(0x1c3)]),_0x2ddbe6[_0x278d27(0x1d4)]=_0x3e812b,_0x2ddbe6[_0x278d27(0x201)](_0x10a297[_0x278d27(0x179)],()=>selectOption(_0x3e812b)),_0x9d515e[_0x278d27(0x156)](_0x2ddbe6);});}function updateFlashcard(_0x2bd242){const _0x37da52=_0x14347a,_0x10f1d1={'wHIHu':function(_0x41d2d1,_0x4dc3e8){return _0x41d2d1!=_0x4dc3e8;},'tdKFm':function(_0x5a683e,_0x289214){return _0x5a683e!=_0x289214;},'dlcjv':'cardFront','UfviA':_0x37da52(0x1fe),'TijuF':_0x37da52(0x171),'QtgqW':function(_0x2020c5,_0xfed314){return _0x2020c5*_0xfed314;},'iPltK':function(_0x1831bd,_0xacbf95){return _0x1831bd-_0xacbf95;},'ASInP':function(_0xdae9c2,_0xebd88d){return _0xdae9c2/_0xebd88d;}};if(_0x10f1d1[_0x37da52(0x1ca)](_0x2bd242,null)&&_0x10f1d1[_0x37da52(0x146)](document[_0x37da52(0x1e5)]('cardFront')[_0x37da52(0x1d4)],_0x2bd242[_0x37da52(0x19c)])){document[_0x37da52(0x1e5)](_0x10f1d1[_0x37da52(0x1a4)])[_0x37da52(0x1d4)]=_0x2bd242[_0x37da52(0x19c)],document[_0x37da52(0x1e5)](_0x10f1d1[_0x37da52(0x1ed)])[_0x37da52(0x1d4)]=_0x2bd242[_0x37da52(0x1aa)],document['getElementById'](_0x37da52(0x19b))['classList']['remove'](_0x10f1d1[_0x37da52(0x1cb)]);const _0x447af5=_0x10f1d1['QtgqW'](_0x10f1d1[_0x37da52(0x1c8)](_0x10f1d1[_0x37da52(0x205)](quizStateManager[_0x37da52(0x1b4)](),quizStateManager[_0x37da52(0x1e2)]()[_0x37da52(0x1de)]),0x1),0x64);document[_0x37da52(0x1e5)](_0x37da52(0x157))['style'][_0x37da52(0x172)]=_0x447af5+'%';}}function selectOption(_0x4e34fd){const _0x286f3f=_0x14347a,_0x40bd59={'EdgKZ':function(_0x535415,_0x362703){return _0x535415<_0x362703;},'tfINx':function(_0x895813,_0x83c8a){return _0x895813===_0x83c8a;},'FPZqG':_0x286f3f(0x1ab),'FqgxY':function(_0x5e2b0e){return _0x5e2b0e();}};if(multipleOptionSelectedAnswer)return;multipleOptionSelectedAnswer=_0x4e34fd;const _0x3ea3a1=document[_0x286f3f(0x1e5)](_0x286f3f(0x1fc)),_0x51cf60=_0x3ea3a1[_0x286f3f(0x1a5)](_0x286f3f(0x1c2));for(let _0x4e8ad1=0x0;_0x40bd59[_0x286f3f(0x1cd)](_0x4e8ad1,_0x51cf60[_0x286f3f(0x1de)]);_0x4e8ad1++){_0x51cf60[_0x4e8ad1]['classList'][_0x286f3f(0x203)](_0x286f3f(0x1ab)),_0x40bd59[_0x286f3f(0x163)](_0x51cf60[_0x4e8ad1]['textContent'],_0x4e34fd)&&_0x51cf60[_0x4e8ad1][_0x286f3f(0x1b6)][_0x286f3f(0x1db)](_0x40bd59['FPZqG']);}_0x40bd59['FqgxY'](checkAnswer);}function checkAnswer(){const _0x469aab=_0x14347a,_0x8dd733={'YAcCb':_0x469aab(0x1fc),'wgsVj':'option','dYoKB':function(_0x390d2e,_0x49b5c5){return _0x390d2e<_0x49b5c5;},'aGMIX':function(_0x43a780,_0x423488){return _0x43a780===_0x423488;},'tfehU':'correct','yRoIV':_0x469aab(0x187),'MyXMw':function(_0xd24346,_0x106ba8){return _0xd24346===_0x106ba8;}},_0x3eae70=quizStateManager[_0x469aab(0x169)](),_0x400898=document['getElementById'](_0x8dd733[_0x469aab(0x1ba)]),_0x2b72b7=_0x400898[_0x469aab(0x1a5)](_0x8dd733[_0x469aab(0x1d6)]);for(let _0x404dbd=0x0;_0x8dd733[_0x469aab(0x168)](_0x404dbd,_0x2b72b7[_0x469aab(0x1de)]);_0x404dbd++){if(_0x8dd733['aGMIX'](_0x2b72b7[_0x404dbd]['textContent'],_0x3eae70['correctAnswer']))_0x2b72b7[_0x404dbd][_0x469aab(0x1b6)][_0x469aab(0x1db)](_0x8dd733[_0x469aab(0x15e)]);else _0x8dd733[_0x469aab(0x180)](_0x2b72b7[_0x404dbd][_0x469aab(0x1d4)],multipleOptionSelectedAnswer)&&_0x2b72b7[_0x404dbd][_0x469aab(0x1b6)][_0x469aab(0x1db)](_0x8dd733['yRoIV']);}if(_0x8dd733['MyXMw'](multipleOptionSelectedAnswer,_0x3eae70[_0x469aab(0x1aa)]))score++;else{}btnNextCard[_0x469aab(0x14f)][_0x469aab(0x208)]=_0x469aab(0x1ac);}const setupEventListeners=()=>{const _0x3e6211=_0x14347a,_0x328641={'TCCYt':_0x3e6211(0x1a0),'kGUao':function(_0x2bb721,_0x58ab29){return _0x2bb721(_0x58ab29);},'dMINL':function(_0x373f95,_0x44ad27){return _0x373f95(_0x44ad27);},'BPYRo':_0x3e6211(0x17b),'lsysA':function(_0x3929a1){return _0x3929a1();},'lQzkm':_0x3e6211(0x1d7),'yhCIh':_0x3e6211(0x187),'lpjFj':function(_0x444cb2,_0xd68587){return _0x444cb2(_0xd68587);},'RGAqm':'favoriteStatus','PxiVH':function(_0x46a2c7,_0x198422){return _0x46a2c7!==_0x198422;},'EyiKJ':_0x3e6211(0x15c),'pHRXr':_0x3e6211(0x18c),'BgkrH':_0x3e6211(0x1bf),'BiALa':_0x3e6211(0x1d5),'Vbalf':_0x3e6211(0x1ad),'xqGnL':'click','zvdCV':_0x3e6211(0x207),'KJJHT':_0x3e6211(0x16b)},_0x247cf7=document[_0x3e6211(0x1e5)](_0x3e6211(0x19b)),_0x5b7f15=document['getElementById'](_0x328641[_0x3e6211(0x1f6)]),_0x7430e3=document[_0x3e6211(0x1e9)](_0x328641['BgkrH']);let _0x197320=![];const _0x429851=JSON[_0x3e6211(0x151)](_0x5ae498['getItem'](_0x328641[_0x3e6211(0x195)]));_0x429851&&(_0x197320=_0x429851,_0x7430e3[_0x3e6211(0x1b6)][_0x3e6211(0x1db)](_0x328641[_0x3e6211(0x1b1)])),window[_0x3e6211(0x201)](_0x3e6211(0x1d3),_0x227748=>{const _0x1a4af8=_0x3e6211;console['log'](_0x328641[_0x1a4af8(0x1fd)],_0x227748[_0x1a4af8(0x161)]),_0x328641[_0x1a4af8(0x186)](updateCard,_0x227748['detail'][_0x1a4af8(0x19c)]);}),window[_0x3e6211(0x201)]('quizQuestionCorrect',_0x67983e=>{const _0x1ae9d3=_0x3e6211;console['log'](_0x1ae9d3(0x19d),_0x67983e[_0x1ae9d3(0x161)]),_0x328641['dMINL'](showFeedback,_0x328641[_0x1ae9d3(0x1dc)]);if(quizStateManager['isTrainingMode']){const _0x10c801=_0x328641[_0x1ae9d3(0x14b)](loadQuizData);_0x10c801[_0x1ae9d3(0x149)]=_0x10c801[_0x1ae9d3(0x149)][_0x1ae9d3(0x1d1)](_0x39d8ac=>_0x39d8ac[_0x1ae9d3(0x19c)]!==_0x67983e['detail'][_0x1ae9d3(0x19c)][_0x1ae9d3(0x19c)]),_0x328641[_0x1ae9d3(0x1fa)](saveQuizData,_0x10c801);}}),window[_0x3e6211(0x201)](_0x328641[_0x3e6211(0x1ea)],_0x978460=>{const _0x7f4d80=_0x3e6211;console[_0x7f4d80(0x154)](_0x328641[_0x7f4d80(0x1dd)],_0x978460[_0x7f4d80(0x161)]),_0x328641[_0x7f4d80(0x1fa)](showFeedback,_0x328641['yhCIh']);let _0x55678e=_0x328641[_0x7f4d80(0x14b)](loadQuizData);if(!_0x55678e)_0x55678e={'incorrectQuestions':[]};else!_0x55678e['incorrectQuestions']&&(_0x55678e['incorrectQuestions']=[]);!_0x55678e[_0x7f4d80(0x149)]['some'](_0x2d2f27=>_0x2d2f27[_0x7f4d80(0x19c)]===_0x978460[_0x7f4d80(0x161)][_0x7f4d80(0x19c)][_0x7f4d80(0x19c)])&&(_0x55678e['incorrectQuestions']['push'](_0x978460[_0x7f4d80(0x161)][_0x7f4d80(0x19c)]),_0x328641['dMINL'](saveQuizData,_0x55678e));}),window['addEventListener'](_0x3e6211(0x1a2),_0x1d521f=>{const _0x5334f1=_0x3e6211;console[_0x5334f1(0x154)](_0x5334f1(0x15f),_0x1d521f[_0x5334f1(0x161)]),_0x328641[_0x5334f1(0x193)](showResult,_0x1d521f[_0x5334f1(0x161)]);}),shuffleButton['addEventListener'](_0x328641[_0x3e6211(0x1e3)],shuffleQuestions),document['getElementById'](_0x328641[_0x3e6211(0x1af)])[_0x3e6211(0x201)](_0x328641['KJJHT'],_0x3a2b93=>{const _0x17f084=_0x3e6211;_0x328641[_0x17f084(0x193)](toggleTrainingMode,_0x3a2b93[_0x17f084(0x152)][_0x17f084(0x196)]);}),_0x7430e3['addEventListener'](_0x328641['xqGnL'],_0x448460=>{const _0x4e796b=_0x3e6211;_0x448460['stopPropagation'](),_0x197320=!_0x197320,_0x7430e3['classList'][_0x4e796b(0x18b)](_0x4e796b(0x1d5)),_0x5ae498[_0x4e796b(0x204)](_0x328641[_0x4e796b(0x195)],JSON[_0x4e796b(0x18e)](_0x197320));}),_0x247cf7[_0x3e6211(0x201)](_0x328641[_0x3e6211(0x1e3)],_0x19bda5=>{const _0xaeff8f=_0x3e6211;_0x328641[_0xaeff8f(0x1c9)](_0x19bda5[_0xaeff8f(0x152)],_0x7430e3)&&_0x328641[_0xaeff8f(0x14b)](flipCard);}),_0x5b7f15[_0x3e6211(0x201)](_0x3e6211(0x19e),()=>{const _0xff6401=_0x3e6211;console[_0xff6401(0x154)](_0x328641[_0xff6401(0x1f1)]),quizStateManager[_0xff6401(0x1a8)]();});};window['addEventListener']('load',()=>{const _0x41f630={'qaCOp':function(_0x5529d4){return _0x5529d4();}};_0x41f630['qaCOp'](init),setupEventListeners();});const setupNavigationListeners=()=>{const _0x37a924=_0x14347a,_0x50fe00={'OFWdg':function(_0x46f987){return _0x46f987();},'hbonD':_0x37a924(0x147),'OfOxW':_0x37a924(0x19e)},_0xabadda=document[_0x37a924(0x1e5)](_0x37a924(0x1b5)),_0x366545=document['getElementById'](_0x50fe00[_0x37a924(0x189)]);_0xabadda[_0x37a924(0x197)](_0x50fe00[_0x37a924(0x1bc)],nextCard),_0x366545[_0x37a924(0x197)](_0x50fe00[_0x37a924(0x1bc)],prevCard),_0xabadda[_0x37a924(0x201)](_0x50fe00[_0x37a924(0x1bc)],_0x4376d6=>{const _0x2c3135=_0x37a924;_0x4376d6[_0x2c3135(0x14a)](),nextCard();}),_0x366545[_0x37a924(0x201)](_0x50fe00[_0x37a924(0x1bc)],_0x2353ec=>{const _0x218543=_0x37a924;_0x2353ec['stopPropagation'](),_0x50fe00[_0x218543(0x162)](prevCard);});};setupNavigationListeners();function showResult(_0x28b09a){const _0x3fb6a6=_0x14347a,_0x1af387={'JLqmf':function(_0x53c36f){return _0x53c36f();},'CriKB':_0x3fb6a6(0x19e)},_0x1bd445=document['getElementsByClassName'](_0x3fb6a6(0x150))[0x0];_0x1bd445['style'][_0x3fb6a6(0x208)]='none';const _0x369fa5=document[_0x3fb6a6(0x1e5)](_0x3fb6a6(0x1ff));_0x369fa5['innerHTML']=_0x3fb6a6(0x1b0)+_0x28b09a[_0x3fb6a6(0x17f)]+_0x3fb6a6(0x15b)+_0x28b09a['totalQuestions']+_0x3fb6a6(0x1c5)+_0x28b09a['correctAnswers']+_0x3fb6a6(0x164)+_0x28b09a['incorrectAnswers']+'</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Next,\x20practice\x20your\x20missed\x20terms\x20with\x20Learn\x20until\x20you\x27ve\x20gotten\x20them\x20right.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btnRestartQuiz\x22\x20onclick_notused=\x22restartQuiz()\x22>Take\x20a\x20new\x20test</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20';const _0x478c00=document[_0x3fb6a6(0x1e5)](_0x3fb6a6(0x18a));_0x478c00[_0x3fb6a6(0x201)](_0x1af387[_0x3fb6a6(0x184)],_0x325935=>{const _0x46316f=_0x3fb6a6;_0x325935[_0x46316f(0x14a)](),_0x1af387['JLqmf'](restartQuiz);});}function restartQuiz(){const _0x24844b=_0x14347a,_0x12c3b1={'ysofC':function(_0x5a112c){return _0x5a112c();},'VhOnR':function(_0x40d0be,_0x5364a5){return _0x40d0be(_0x5364a5);},'xGWCa':_0x24844b(0x150),'kdtWn':_0x24844b(0x1ac),'blNlM':_0x24844b(0x1ff),'YqzWh':_0x24844b(0x206)};_0x12c3b1[_0x24844b(0x183)](initQuizData),quizStateManager[_0x24844b(0x148)](quizDataQuestions),_0x12c3b1[_0x24844b(0x181)](updateCard,quizStateManager[_0x24844b(0x169)]());const _0x2a9b06=document[_0x24844b(0x1a5)](_0x12c3b1[_0x24844b(0x15a)])[0x0];_0x2a9b06[_0x24844b(0x14f)]['display']=_0x12c3b1[_0x24844b(0x145)];const _0x4221fd=document[_0x24844b(0x1e5)](_0x12c3b1[_0x24844b(0x1a9)]);_0x4221fd[_0x24844b(0x14f)]['display']=_0x12c3b1['YqzWh'];}