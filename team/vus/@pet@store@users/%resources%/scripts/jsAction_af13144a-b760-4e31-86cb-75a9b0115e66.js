var file = new java.io.File("C:\\Users\\e40012755\\Desktop\\Neoload training\\sample.csv");
var writer = new java.io.FileWriter(file,true);
var value1 = context.variableManager.getValue("jsessionid");
var value2 = context.variableManager.getValue("LoginCheck");
writer.write(value1+","+value2+"\n");
//writer.write("Hello");
writer.close();
logger.debug("The values have been written to file");