"use strict";
exports.__esModule = true;
var yaml = require("js-yaml");
var fs = require("fs");
var generator_1 = require("./generator/aws/generator");
var generator_2 = require("./generator/azure/generator");
var generator_3 = require("./generator/googleCloud/generator");
try {
  var services_1 = yaml.safeLoad(fs.readFileSync("node-cloud.yml", "utf8"));
  Object.keys(services_1).map(function(service, index) {
    Object.keys(services_1[service]).map(function(provider, index1) {
      if (provider === "Azure") {
        generator_2.generateAzureClass(services_1[service][provider]);
      } else if (provider === "AWS") {
        generator_1.generateAWSClass(services_1[service][provider]);
      } else if (provider === "GCP") {
        generator_3.generateGCPClass(services_1[service][provider]);
      }
    });
  });
} catch (error) {
  console.error("Error : ", error);
}
