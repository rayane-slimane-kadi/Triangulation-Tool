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
  while (subfolders.hasNext()) {
    var subfolder = subfolders.next();
    template.newElement = '<button>' + subfolder.getName() + '</button>';
  }
  var html = template.evaluate().getContent();
  return HtmlService.createHtmlOutput(html);
}
