function doGet() {
  var template = HtmlService.createTemplateFromFile('index');
  var folderName = "Triangulation Tool";
  var folders = DriveApp.getFoldersByName(folderName);
  var folder;

  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder(folderName);
  }

  var subfolders = folder.getFolders();
  var buttons = [];

  while (subfolders.hasNext()) {
    var subfolder = subfolders.next();
    buttons.push('<button>' + subfolder.getName() + '</button>');
  }

  template.newElements = buttons.join(''); // Combine all buttons
  var html = template.evaluate().getContent();
  return HtmlService.createHtmlOutput(html)
    .setTitle('Home') // Set the title of the web app
}

function doPost(){
  var htmlOutput = HtmlService.createTemplateFromFile('test');
  htmlOutput.title = "Test Page";
  return htmlOutput.evaluate().getContent();
}
