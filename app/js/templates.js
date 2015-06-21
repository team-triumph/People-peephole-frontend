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
this["hbs"]["imgs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "  <h3>Mother Fack</h3>\n  <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"addPost\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.allPosts : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n\n\n\n\n<form id=\"logDiv\">\n    <input type=\"text\" id=\"username\" placeholder=\"User Name\">\n    <input type=\"password\" id=\"password\" placeholder=\"password\">\n    <button id=\"login\">Login</button>\n    <br>\n    <button><a href=\"/#register\">Sign Up!</a></button>\n</form>\n\n\n\n\n\n\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["post"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<header>\n\n<h1>People Peephole!</h1>\n\n  <div id=\"scoreBoard\">\n    <h2>High Scores</h2>\n    <ul>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </div>\n</header>\n\n\n<div id=\"pics\">\n  <h3>New Pictures</h3>\n</div>\n\n\n\n\n\n\n\n\n</div>\n<form id=\"addNewPic\">\n\n<button><a href=\"/#submit\">+ Add a Pic</a></button>\n\n</form>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["register"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"userInfo\">\n  <input type=\"text\" id=\"firstName\" placeholder=\"First Name\">\n  <input type=\"text\" id=\"lastName\" placeholder=\"Last Name\">\n  <input type=\"text\" id=\"userName\" placeholder=\"User Name\">\n  <input type=\"email\" id=\"email\" placeholder=\"Email\">\n  <input type=\"password\" id=\"password\" placeholder=\"Password\">\n  <button id=\"addUser\">Add Me</button>\n  <br>\n  <button> <a href=\"/#login\">Already a user? Click here.</a></button>\n</form>\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["sub"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n\n\n<form id=\"subPic\">\n\n  <input type=\"text\" id=\"image\" placeholder=\"Image URL\">\n\n  <input type=\"text\" id=\"answer\" placeholder=\"Answer\">\n  <input type=\"text\" id=\"answer_1\" placeholder=\"Fake Answer\">\n  <input type=\"text\" id=\"answer_2\" placeholder=\"Fake Answer\">\n  <input type=\"text\" id=\"answer_3\" placeholder=\"Fake Answer\">\n\n\n  <button id=\"newSubPic\">Submit Pic!</button>\n\n</form>\n\n\n\n\n";
},"useData":true});