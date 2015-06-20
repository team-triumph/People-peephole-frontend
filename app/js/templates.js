this["hbs"] = this["hbs"] || {};
this["hbs"]["guess"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<div id=\"imgSpot\" class=\"imgSpot\">\n\n</div>\n\n\n\n<form id=\"guessing\">\n  <button id=\"answer\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"answer","hash":{},"data":data}) : helper)))
    + "</button>\n  <button id=\"answer_1\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"answer","hash":{},"data":data}) : helper)))
    + "</button>\n  <button id=\"answer_2\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"answer","hash":{},"data":data}) : helper)))
    + "</button>\n  <button id=\"answer_3\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"answer","hash":{},"data":data}) : helper)))
    + "</button>\n</form>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n\n<h2> Hello </h2>\n\n<form id=\"logDiv\">\n\n    <input type=\"text\" id=\"userName\" placeholder=\"Username\">\n\n\n    <input type=\"password\" id=\"password\" placeholder=\"password\">\n    <button id=\"login\">Login</button>\n    <br>\n    <br>\n    <button><a href=\"/#register\">Sign Up!</a></button>\n\n</form>\n\n\n\n\n\n\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["post"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>People Peephole!</h1>\n\n<div id=\"pics\">\n  <h2>New Pictures</h2>\n\n\n  <div id=\"addPost\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.post : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n\n\n\n\n\n</div>\n<form id=\"addNewPic\">\n\n\n\n\n</form>\n\n\n\n<div id=\"score\">\n\n\n  <div id=\"scoreBoard\">\n    <h3>High Scores</h3>\n    <ul>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </div>\n</div>\n  <button><a href=\"/#submit\">+ Add a Pic</a></button>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["register"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2> Register </h2>\n\n\n<form id=\"userInfo\">\n  <input type=\"text\" id=\"firstName\" placeholder=\"First Name\">\n  <input type=\"text\" id=\"lastName\" placeholder=\"Last Name\">\n  <input type=\"text\" id=\"userName\" placeholder=\"User Name\">\n  <input type=\"email\" id=\"email\" placeholder=\"Email\">\n  <input type=\"password\" id=\"password\" placeholder=\"Password\">\n  <button id=\"addUser\">Add Me</button>\n  <br>\n\n    <br>\n  <button id=\"login-direct\"><a href=\"/#login\">Already a user? Click here.</a></button>\n\n</form>\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["sub"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<h3> Have a Cool Picture? Show Us!</h3>\n\n<form id=\"subPic\">\n\n  <input type=\"text\" id=\"image\" placeholder=\"Image URL\">\n\n\n  <input type=\"text\" id=\"answer\" placeholder=\"Answer\">\n  <input type=\"text\" id=\"answer_1\" placeholder=\"Fake Answer\">\n  <input type=\"text\" id=\"answer_2\" placeholder=\"Fake Answer\">\n  <input type=\"text\" id=\"answer_3\" placeholder=\"Fake Answer\">\n  <button id=\"newSubPic\">Submit Pic!</button>\n</form>\n\n\n\n\n\n\n\n\n\n\n\n";
},"useData":true});