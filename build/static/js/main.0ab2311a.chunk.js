(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(3),r=n.n(i),c=(n(17),n(9)),s=n(8),u=n(4),o=n(5),h=n(7),m=n(6),d=n(10),v=function(e){var t=e.index,n=e.value;return l.a.createElement("span",{className:"Ceil","data-index":t},n)},x=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]],f=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={cells:Array(9).fill(null),winner:null,currentTurn:1},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"_getIndexCell",value:function(e){var t=e.target.closest("[data-index]");if(t){var n=t.dataset.index;this._markCeil(n)}}},{key:"_markCeil",value:function(e){var t=this.state,n=t.winner,a=t.currentTurn,l=Object(s.a)(t.cells).slice(0);if(null===l[e]&&null===n){var i=a%2===1?"X":"O";l[e]=i,a+=1,n=this._checkWinner(l),this.setState({cells:l,currentTurn:a,winner:n})}}},{key:"_getCellText",value:function(e){return e||""}},{key:"_checkWinner",value:function(e){for(var t=0;t<x.length;t++){var n=x[t],a=Object(c.a)(n),l=a[0],i=a[1],r=a[2];if(null!==e[l]&&e[l]===e[i]&&e[i]===e[r])return e[l]}return null}},{key:"render",value:function(){var e=this,t=this.state,n=t.winner,a=t.currentTurn;return l.a.createElement("div",{className:"Game-field",onClick:function(t){e._getIndexCell(t)}},l.a.createElement("h3",null,"Tic Tac Toe ",n?"(Winner: ".concat(n,")"):"(Turn: ".concat(a,")")),l.a.createElement("div",{className:"Ceil-container"},l.a.createElement(v,{index:"0",value:this._getCellText(this.state.cells[0])}),l.a.createElement(v,{index:"1",value:this._getCellText(this.state.cells[1])}),l.a.createElement(v,{index:"2",value:this._getCellText(this.state.cells[2])})),l.a.createElement("div",{className:"Ceil-container"},l.a.createElement(v,{index:"3",value:this._getCellText(this.state.cells[3])}),l.a.createElement(v,{index:"4",value:this._getCellText(this.state.cells[4])}),l.a.createElement(v,{index:"5",value:this._getCellText(this.state.cells[5])})),l.a.createElement("div",{className:"Ceil-container"},l.a.createElement(v,{index:"6",value:this._getCellText(this.state.cells[6])}),l.a.createElement(v,{index:"7",value:this._getCellText(this.state.cells[7])}),l.a.createElement(v,{index:"8",value:this._getCellText(this.state.cells[8])})),l.a.createElement("div",{className:"btn-container"},l.a.createElement("button",{className:"Game-btn--restart",onClick:function(){return e.setState({cells:Array(9).fill(null),winner:null,currentTurn:1})}},"Restart")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.0ab2311a.chunk.js.map