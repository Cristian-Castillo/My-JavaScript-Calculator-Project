(this.webpackJsonptestapp=this.webpackJsonptestapp||[]).push([[0],{14:function(e,r,a){e.exports=a(28)},25:function(e,r,a){},26:function(e,r,a){},27:function(e,r,a){},28:function(e,r,a){"use strict";a.r(r);var t=a(0),n=a.n(t),c=a(2),o=a.n(c),l=a(3),s=a(4),b=a(1),m={total:0,numberArray:[0]},u=[0],i=[1],y=[2],A=[3],d=[4],p=[5],O=[6],E=[7],j=[8],N=[9],v=["-"],h=["X"],D=["."],f=["/"],g=["+"],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"EQUAL":case"SUBTRACT":var a=e.numberArray.length;return 0===e.numberArray[0]?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray[0]=v}):e.numberArray[a-1]==v?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(v)});case"ADD":var t=e.numberArray.length;return 0===e.numberArray[0]?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray[0]=g}):e.numberArray[t-1]==g?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(g)});case"MULTIPLY":var n=e.numberArray.length;return 0===e.numberArray[0]||e.numberArray[n-1]==h?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(h)});case"DECIMAL":e.numberArray.length;return 0===e.numberArray[0]?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(D)}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray});case"DIVISION":var c=e.numberArray.length;return 0===e.numberArray[0]||e.numberArray[c-1]==f?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(f)});case"RESET":return!1,{total:e.total=0,numberArray:e.numberArray=[0]};case"ZERO":return Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(u)});case"ADDONE":return 0===e.numberArray[0]?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray[0]=i}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(i)});case"ADDTWO":return 0===e.numberArray[0]?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray[0]=y}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(y)});case"ADDTHREE":return 0===e.numberArray[0]?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray[0]=A}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(A)});case"ADDFOUR":return 0===e.numberArray[0]?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray[0]=d}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(d)});case"ADDFIVE":return 0===e.numberArray[0]?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray[0]=p}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(p)});case"ADDSIX":return 0===e.numberArray[0]?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray[0]=O}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(O)});case"ADDSEVEN":return 0===e.numberArray[0]?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray[0]=E}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(E)});case"ADDEIGHT":return 0===e.numberArray[0]?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray[0]=j}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(j)});case"ADDNINE":return 0===e.numberArray[0]?Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray[0]=N}):Object(b.a)(Object(b.a)({},e),{},{numberArray:e.numberArray.concat(N)});default:return e}},C=(a(25),a(10)),T=a(11),w=a(13),I=a(12),S=(a(26),function(e){Object(w.a)(a,e);var r=Object(I.a)(a);function a(e){return Object(C.a)(this,a),r.call(this,e)}return Object(T.a)(a,[{key:"render",value:function(){this.props.storeTotal;var e=this.props.storeArray,r=this.props.division,a=this.props.add,t=this.props.reset,c=this.props.multiply,o=this.props.subtract,l=this.props.decimal,s=this.props.equal,b=this.props.addZero,m=this.props.addOne,u=this.props.addTwo,i=this.props.addThree,y=this.props.addFour,A=this.props.addFive,d=this.props.addSix,p=this.props.addSeven,O=this.props.addEight,E=this.props.addNine,j={backgroundColor:"rgb(193, 196, 211)",border:".1px solid black"};return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row col-result-layout"},n.a.createElement("div",{className:"col-12 col-subresult"},e),n.a.createElement("div",{className:"col-12 "},e)),n.a.createElement("div",{style:{backgroundColor:"yellow"},className:"row"},n.a.createElement("div",{className:"col-6",style:{border:".5px solid black",backgroundColor:"rgb(221, 62, 97)"}},n.a.createElement("button",{className:"ac-style",onClick:t},"AC")),n.a.createElement("div",{className:"col-3",style:j},n.a.createElement("button",{className:"division-style",onClick:r},"/")),n.a.createElement("div",{className:"col-3",style:j},n.a.createElement("button",{className:"mult-style",onClick:c},"x"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3",style:j},n.a.createElement("button",{className:"dig-seven",onClick:p},"7")),n.a.createElement("div",{className:"col-3",style:j},n.a.createElement("button",{className:"dig-eight",onClick:O},"8")),n.a.createElement("div",{className:"col-3",style:j},n.a.createElement("button",{className:"dig-nine",onClick:E},"9")),n.a.createElement("div",{className:"col-3",style:j},n.a.createElement("button",{className:"op-sub",onClick:o},"-"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{style:j,className:"col-3"},n.a.createElement("button",{className:"dig-four",onClick:y},"4")),n.a.createElement("div",{style:j,className:"col-3"},n.a.createElement("button",{className:"dig-five",onClick:A},"5")),n.a.createElement("div",{style:j,className:"col-3"},n.a.createElement("button",{className:"dig-six",onClick:d},"6")),n.a.createElement("div",{style:j,className:"col-3"},n.a.createElement("button",{className:"op-add",onClick:a},"+"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{style:j,className:"col-3"},n.a.createElement("button",{className:"dig-one",onClick:m},"1")),n.a.createElement("div",{style:j,className:"col-3"},n.a.createElement("button",{className:"dig-two",onClick:u},"2")),n.a.createElement("div",{style:j,className:"col-3"},n.a.createElement("button",{className:"dig-three",onClick:i},"3")),n.a.createElement("div",{style:{backgroundColor:"rgb(193, 196, 211)",border:".1px solid black",borderBottom:"none"},className:"col-3"},n.a.createElement("button",{className:"op-equal",onClick:s},"="))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{style:j,className:"col-6"},n.a.createElement("button",{className:"dig-zero",onClick:b},"0")),n.a.createElement("div",{style:j,className:"col-3"},n.a.createElement("button",{className:"op-dec",onClick:l},".")),n.a.createElement("div",{style:{backgroundColor:"rgb(193, 196, 211)",border:".1px solid black",borderTop:"none"},className:"col-3"})))}}]),a}(t.Component)),R=Object(s.b)((function(e){return{storeTotal:e.total,storeArray:e.numberArray}}),(function(e){return{reset:function(){e({type:"RESET"})},division:function(){e({type:"DIVISION"})},multiply:function(){e({type:"MULTIPLY"})},equal:function(){e({type:"EQUAL"})},add:function(){e({type:"ADD"})},decimal:function(){e({type:"DECIMAL"})},subtract:function(){e({type:"SUBTRACT"})},addZero:function(){e({type:"ZERO"})},addOne:function(){e({type:"ADDONE"})},addTwo:function(){e({type:"ADDTWO"})},addThree:function(){e({type:"ADDTHREE"})},addFour:function(){e({type:"ADDFOUR"})},addFive:function(){e({type:"ADDFIVE"})},addSix:function(){e({type:"ADDSIX"})},addSeven:function(){e({type:"ADDSEVEN"})},addEight:function(){e({type:"ADDEIGHT"})},addNine:function(){e({type:"ADDNINE"})}}}))(S);a(27);var x=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-header"},n.a.createElement(R,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=Object(l.b)(k);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,{store:F},n.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.bf806a35.chunk.js.map