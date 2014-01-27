﻿CKEDITOR.dialog.add("syntaxhighlightDialog",function(c){var e=function(a){return a={hideGutter:!1,hideControls:!1,collapse:!1,showColumns:!1,noWrap:!1,firstLineChecked:!1,firstLine:0,highlightChecked:!1,highlight:null,lang:null,code:""}};return{title:c.lang.syntaxhighlight.title,minWidth:500,minHeight:400,contents:[{id:"source",label:c.lang.syntaxhighlight.sourceTab,accessKey:"S",elements:[{type:"vbox",children:[{id:"cmbLang",type:"select",labelLayout:"horizontal",label:c.lang.syntaxhighlight.langLbl,
"default":"java",widths:["25%","75%"],items:[["Bash (Shell)","bash"],["C#","csharp"],["C++","cpp"],["CSS","css"],["Delphi","delphi"],["Diff","diff"],["Groovy","groovy"],["Javascript","jscript"],["Java","java"],["Java FX","javafx"],["Perl","perl"],["PHP","php"],["Plain (Text)","plain"],["Python","python"],["Ruby","ruby"],["Scala","scala"],["SQL","sql"],["VB","vb"],["XML/XHTML","xml"]],setup:function(a){a.lang&&this.setValue(a.lang)},commit:function(a){a.lang=this.getValue()}}]},{type:"textarea",id:"hl_code",
rows:22,style:"width:100%",validate:CKEDITOR.dialog.validate.notEmpty(c.lang.syntaxhighlight.sourceTextareaEmptyError),setup:function(a){a.code&&this.setValue(a.code)},commit:function(a){a.code=this.getValue()}}]},{id:"advanced",label:c.lang.syntaxhighlight.advancedTab,accessKey:"A",elements:[{type:"vbox",children:[{type:"html",html:"<strong>"+c.lang.syntaxhighlight.hideGutter+"</strong>"},{type:"checkbox",id:"hide_gutter",label:c.lang.syntaxhighlight.hideGutterLbl,setup:function(a){this.setValue(a.hideGutter)},
commit:function(a){a.hideGutter=this.getValue()}},{type:"html",html:"<strong>"+c.lang.syntaxhighlight.hideControls+"</strong>"},{type:"checkbox",id:"hide_controls",label:c.lang.syntaxhighlight.hideControlsLbl,setup:function(a){this.setValue(a.hideControls)},commit:function(a){a.hideControls=this.getValue()}},{type:"html",html:"<strong>"+c.lang.syntaxhighlight.collapse+"</strong>"},{type:"checkbox",id:"collapse",label:c.lang.syntaxhighlight.collapseLbl,setup:function(a){this.setValue(a.collapse)},
commit:function(a){a.collapse=this.getValue()}},{type:"html",html:"<strong>"+c.lang.syntaxhighlight.showColumns+"</strong>"},{type:"checkbox",id:"show_columns",label:c.lang.syntaxhighlight.showColumnsLbl,setup:function(a){this.setValue(a.showColumns)},commit:function(a){a.showColumns=this.getValue()}},{type:"html",html:"<strong>"+c.lang.syntaxhighlight.lineWrap+"</strong>"},{type:"checkbox",id:"line_wrap",label:c.lang.syntaxhighlight.lineWrapLbl,setup:function(a){this.setValue(a.noWrap)},commit:function(a){a.noWrap=
this.getValue()}},{type:"html",html:"<strong>"+c.lang.syntaxhighlight.lineCount+"</strong>"},{type:"hbox",widths:["5%","95%"],children:[{type:"checkbox",id:"lc_toggle",label:"",setup:function(a){this.setValue(a.firstLineChecked)},commit:function(a){a.firstLineChecked=this.getValue()}},{type:"text",id:"default_lc",style:"width:15%;",label:"",setup:function(a){1<a.firstLine&&this.setValue(a.firstLine)},commit:function(a){this.getValue()&&""!=this.getValue()&&(a.firstLine=this.getValue())}}]},{type:"html",
html:"<strong>"+c.lang.syntaxhighlight.highlight+"</strong>"},{type:"hbox",widths:["5%","95%"],children:[{type:"checkbox",id:"hl_toggle",label:"",setup:function(a){this.setValue(a.highlightChecked)},commit:function(a){a.highlightChecked=this.getValue()}},{type:"text",id:"default_hl",style:"width:40%;",label:"",setup:function(a){null!=a.highlight&&this.setValue(a.highlight)},commit:function(a){this.getValue()&&""!=this.getValue()&&(a.highlight=this.getValue())}}]},{type:"hbox",widths:["5%","95%"],
children:[{type:"html",html:""},{type:"html",html:"<i>"+c.lang.syntaxhighlight.highlightLbl+"</i>"}]}]}]}],onShow:function(){var a=this.getParentEditor().getSelection().getStartElement(),a=a&&a.getAscendant("pre",!0),b=null;if(a){b=a.getHtml();b=b.replace(/<br>/g,"\n");b=b.replace(/&amp;/g,"&");b=b.replace(/&lt;/g,"<");b=b.replace(/&gt;/g,">");code=b=b.replace(/&quot;/g,'"');a=a.getAttribute("class");b=e();if(a){if(-1<a.indexOf("brush")){var d=/brush:[ ]{0,1}(\w*)/.exec(a);null!=d&&0<d.length&&(b.lang=
d[1].replace(/^\s+|\s+$/g,""))}-1<a.indexOf("gutter")&&(b.hideGutter=!0);-1<a.indexOf("toolbar")&&(b.hideControls=!0);-1<a.indexOf("collapse")&&(b.collapse=!0);-1<a.indexOf("first-line")&&(d=/first-line:[ ]{0,1}([0-9]{1,4})/.exec(a),null!=d&&(0<d.length&&1<d[1])&&(b.firstLineChecked=!0,b.firstLine=d[1]));-1<a.indexOf("highlight")&&a.match(/highlight:[ ]{0,1}\[[0-9]+(,[0-9]+)*\]/)&&(d=/highlight:[ ]{0,1}\[(.*)\]/.exec(a),null!=d&&0<d.length&&(b.highlightChecked=!0,b.highlight=d[1]));-1<a.indexOf("ruler")&&
(b.showColumns=!0);-1<a.indexOf("wrap-lines")&&(b.noWrap=!0)}b.code=code}else b=e();this.setupContent(b)},onOk:function(){var a=this.getParentEditor(),b=a.getSelection().getStartElement(),d=b&&b.getAscendant("pre",!0),b=e();this.commitContent(b);var c;c="brush:"+b.lang+";";b.hideGutter&&(c+="gutter:false;");b.hideControls&&(c+="toolbar:false;");b.collapse&&(c+="collapse:true;");b.showColumns&&(c+="ruler:true;");b.noWrap&&(c+="wrap-lines:false;");b.firstLineChecked&&1<b.firstLine&&(c+="first-line:"+
b.firstLine+";");b.highlightChecked&&""!=b.highlight&&(c+="highlight: ["+b.highlight.replace(/\s/gi,"")+"];");d?(d.setAttribute("class",c),d.setText(b.code)):(d=new CKEDITOR.dom.element("pre"),d.setAttribute("class",c),d.setText(b.code),a.insertElement(d))}}});