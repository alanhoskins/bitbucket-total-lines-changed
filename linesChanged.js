javascript: (function() {
  var linesAddedList = document.querySelectorAll("span.lines-added");
  var linesRemovedList = document.querySelectorAll("span.lines-removed");

  var list = document.getElementById("commit-files-summary");
  var total = document.createElement("div");
  total.classList.add("commit-file-diff-stats");

  var added = document.createElement("span");
  added.classList.add("lines-added");
  added.innerHTML = Array.from(linesAddedList)
    .map(e => parseInt(e.innerHTML))
    .reduce((a, b) => (a += b));

  var removed = document.createElement("span");
  removed.classList.add("lines-removed");
  removed.innerHTML = Array.from(linesRemovedList)
    .map(e => parseInt(e.innerHTML))
    .reduce((a, b) => (a += b));

  var listItem = document.createElement("li");
  listItem.classList.add("iterable-item", "file", "file-modified");

  var label = document.createElement("span");
  label.classList.add(
    "aui-lozenge",
    "aui-lozenge-subtle",
    "aui-lozenge-complete"
  );
  label.innerHTML = "Total";

  total.appendChild(added);
  total.appendChild(removed);
  listItem.appendChild(total);
  listItem.appendChild(label);
  list.appendChild(listItem);
})();
