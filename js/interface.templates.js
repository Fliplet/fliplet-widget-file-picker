this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.app"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-xs-4 col-sm-3 col-md-2 item-holder folder\" data-app-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"thumb-wrapper\">\r\n    <div class=\"btn-group more-options\">\r\n      <button class=\"btn btn-link\" type=\"button\" id=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-ellipsis-v\"></i>\r\n      </button>\r\n      <ul class=\"dropdown-menu dropdown-menu-right\">\r\n        <li class=\"text-danger delete-folder\">Move to trash</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"image-holder folder\">\r\n      <div class=\"image-overlay\">\r\n        <i class=\"fa fa-folder\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"image-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.audio"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " selected ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-xs-4 col-sm-3 col-md-2 item-holder image audio "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-file-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\r\n  data-file-ext=\""
    + alias4(((helper = (helper = helpers.ext || (depth0 != null ? depth0.ext : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ext","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"thumb-wrapper\">\r\n    <div class=\"btn-group more-options\">\r\n      <button class=\"btn btn-link\" type=\"button\" id=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-ellipsis-v\"></i>\r\n      </button>\r\n      <ul class=\"dropdown-menu dropdown-menu-right\">\r\n        <li class=\"text-danger delete-file\">Move to trash</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"image-holder file\">\r\n      <div class=\"image-overlay\" style=\"opacity: 1\">\r\n        <i class=\"fa fa-music\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"image-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.document"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " selected ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-xs-4 col-sm-3 col-md-2 item-holder image document "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-file-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-file-ext=\""
    + alias4(((helper = (helper = helpers.ext || (depth0 != null ? depth0.ext : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ext","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"thumb-wrapper\">\r\n    <div class=\"btn-group more-options\">\r\n      <button class=\"btn btn-link\" type=\"button\" id=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-ellipsis-v\"></i>\r\n      </button>\r\n      <ul class=\"dropdown-menu dropdown-menu-right\">\r\n        <li class=\"text-danger delete-file\">Move to trash</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"image-holder file\">\r\n      <div class=\"image-overlay\" style=\"opacity: 1\">\r\n        <i class=\"fa fa-file\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"image-title\">"
    + alias4((helpers.formatName || (depth0 && depth0.formatName) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"formatName","hash":{},"data":data}))
    + "</div>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.folder"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " selected ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-xs-4 col-sm-3 col-md-2 item-holder folder "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-folder-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-parent-id=\""
    + alias4(((helper = (helper = helpers.parentId || (depth0 != null ? depth0.parentId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"parentId","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"thumb-wrapper\">\r\n    <div class=\"btn-group more-options\">\r\n      <button class=\"btn btn-link\" type=\"button\" id=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-ellipsis-v\"></i>\r\n      </button>\r\n      <ul class=\"dropdown-menu dropdown-menu-right\">\r\n        <li class=\"text-danger delete-folder\">Move to trash</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"image-holder folder\">\r\n      <div class=\"image-overlay\">\r\n        <i class=\"fa fa-folder\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"image-title\">"
    + alias4((helpers.formatName || (depth0 && depth0.formatName) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"formatName","hash":{},"data":data}))
    + "</div>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.font"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " selected ";
},"3":function(container,depth0,helpers,partials,data) {
    return "active";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-xs-4 col-sm-3 col-md-2 item-holder image font "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-file-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-file-ext=\""
    + alias4(((helper = (helper = helpers.ext || (depth0 != null ? depth0.ext : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ext","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"thumb-wrapper\">\r\n    <div class=\"btn-group more-options\">\r\n      <button class=\"btn btn-link\" type=\"button\" id=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-ellipsis-v\"></i>\r\n      </button>\r\n      <ul class=\"dropdown-menu dropdown-menu-right\">\r\n        <li class=\"organization-media "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isOrganizationMedia : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">Make it available to the organization <i class=\"fa fa-check\"></i></li>\r\n        <li role=\"separator\" class=\"divider\"></li>\r\n        <li class=\"text-danger delete-file\">Move to trash</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"image-holder file\">\r\n      <div class=\"image-overlay\" style=\"opacity: 1\">\r\n        <i class=\"fa fa-font\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"image-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.image"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " selected ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-xs-4 col-sm-3 col-md-2 item-holder image "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-file-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-file-ext=\""
    + alias4(((helper = (helper = helpers.ext || (depth0 != null ? depth0.ext : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ext","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"thumb-wrapper\">\r\n    <div class=\"btn-group more-options\">\r\n      <button class=\"btn btn-link\" type=\"button\" id=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-ellipsis-v\"></i>\r\n      </button>\r\n      <ul class=\"dropdown-menu dropdown-menu-right\">\r\n        <li class=\"text-danger delete-file\">Move to trash</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"image-holder file\" style=\"background-image: url('"
    + alias4(((helper = (helper = helpers.urlSmall || (depth0 != null ? depth0.urlSmall : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlSmall","hash":{},"data":data}) : helper)))
    + "');\">\r\n      <div class=\"image-overlay\">\r\n        <i class=\"fa\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"image-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.nofiles"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"nofiles-msg\">\r\n  <div class=\"drop-zone-container\">\r\n    <div class=\"dropZ\">\r\n      <p>\r\n        <span>&#x1F633</span>\r\n        <br>\r\n        <strong>This folder seems to be empty</strong>\r\n      </p>\r\n      <small>No "
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data}) : helper)))
    + " is found</small>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.organization"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-xs-4 col-sm-3 col-md-2 item-holder folder\" data-organization-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"thumb-wrapper\">\r\n    <div class=\"btn-group more-options\">\r\n      <button class=\"btn btn-link\" type=\"button\" id=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-ellipsis-v\"></i>\r\n      </button>\r\n      <ul class=\"dropdown-menu dropdown-menu-right\">\r\n        <li class=\"text-danger delete-folder\">Move to trash</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"image-holder folder\">\r\n      <div class=\"image-overlay\">\r\n        <i class=\"fa fa-folder\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"image-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.other"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " selected ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-xs-4 col-sm-3 col-md-2 item-holder image other "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-file-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-file-ext=\""
    + alias4(((helper = (helper = helpers.ext || (depth0 != null ? depth0.ext : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ext","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"thumb-wrapper\">\r\n    <div class=\"btn-group more-options\">\r\n      <button class=\"btn btn-link\" type=\"button\" id=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-ellipsis-v\"></i>\r\n      </button>\r\n      <ul class=\"dropdown-menu dropdown-menu-right\">\r\n        <li class=\"text-danger delete-file\">Move to trash</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"image-holder file\">\r\n      <div class=\"image-overlay\" style=\"opacity: 1\">\r\n        <i class=\"fa fa-file\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"image-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.video"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " selected ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-xs-4 col-sm-3 col-md-2 item-holder image video "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-file-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-file-ext=\""
    + alias4(((helper = (helper = helpers.ext || (depth0 != null ? depth0.ext : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ext","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"thumb-wrapper\">\r\n    <div class=\"btn-group more-options\">\r\n      <button class=\"btn btn-link\" type=\"button\" id=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-ellipsis-v\"></i>\r\n      </button>\r\n      <ul class=\"dropdown-menu dropdown-menu-right\">\r\n        <li class=\"text-danger delete-file\">Move to trash</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"image-holder file\">\r\n      <div class=\"image-overlay\" style=\"opacity: 1\">\r\n        <i class=\"fa fa-video-camera\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"image-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>";
},"useData":true});