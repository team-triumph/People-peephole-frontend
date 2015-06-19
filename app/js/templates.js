this["hbs"] = this["hbs"] || {};
this["hbs"]["guess"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<div id=\"imgSpot\" class=\"imgSpot\">\n\n</div>\n\n\n\n<form id=\"guessing\">\n  <button id=\"ansOne\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"answer","hash":{},"data":data}) : helper)))
    + "</button>\n  <button id=\"ansTwo\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"answer","hash":{},"data":data}) : helper)))
    + "</button>\n  <button id=\"ansThree\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"answer","hash":{},"data":data}) : helper)))
    + "</button>\n  <button id=\"ansFour\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"answer","hash":{},"data":data}) : helper)))
    + "</button>\n</form>\n\n\n\n\n\n\n\n\n\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n\n<h2> Hello </h2>\n\n<form id=\"logDiv\">\n    <input type=\"text\" id=\"userName\" placeholder=\"User Name\">\n    <input type=\"password\" id=\"passWord\" placeholder=\"password\">\n    <button id=\"login\"></button>\n    <br>\n    <h3 id=\"rout2Reg\">Sign Up!</h3>\n</form>\n\n\n\n\n\n\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["post"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n<div id=\"pics\">\n  <h3>New Pictures</h3>\n\n\n  <div id=\"addPost\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.post : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n\n\n\n\n\n</div>\n<form id=\"addNewPic\">\n\n  <button><a href=\"/#submit\">Submit a Pic</a></button>\n\n\n</form>\n\n\n\n<div id=\"score\">\n\n<h1>People Peephole!</h1>\n\n  <div id=\"scoreBoard\">\n    <h2>High Scores</h2>\n    <ul>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </div>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["register"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2> Hello </h2>\n\n\n<form id=\"userInfo\">\n  <input type=\"text\" id=\"firstName\" placeholder=\"First Name\">\n  <input type=\"text\" id=\"lastName\" placeholder=\"Last Name\">\n  <input type=\"text\" id=\"userName\" placeholder=\"User Name\">\n  <input type=\"email\" id=\"email\" placeholder=\"Email\">\n  <input type=\"password\" id=\"password\" placeholder=\"Password\">\n  <button id=\"addUser\">Add Me</button>\n  <br>\n  <h3 id=\"login-direct\">Already a user? Click here.</h3>\n</form>\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["sub"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n\n\n<form id=\"subPic\">\n\n  <input id=\"inpURL\" placeholder=\"Image URL\">\n\n  <input id=\"inpAns\" placeholder=\"Answer\">\n\n  <button id=\"newSubPic\">Submit Pic!</button>\n\n</form>\n\n\n\n\n";
},"useData":true});