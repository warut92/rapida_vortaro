  //premi Enter por ekserĉi.
  // document.addEventListener('keydown', function(e) {
  //   if (e.keyCode === 13) {
  //   }
  // });
  
  function liveSearch(vorto) {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var searchResult = document.getElementById("searchResult");
    if (searchInput === "") {
      searchResult.innerHTML = ""
    }

    const ESPDIC = espDic.split("\n")

    if (vorto.length > 1) {
      let PATTERN = new RegExp(`(${(vorto)})`, "gm");
      let RESULTS = ESPDIC.filter(function(str) {
        return PATTERN.test(str);
      });

      RESULTS = RESULTS.join("+")
      // console.log(RESULTS);
      let results = RESULTS.toString()
      .replace(/\+/g, "<hr>")
      // .replace(/([ก-๙]*) : ([A-Za-z \(\)\'\"]*)/g, "<span onclick=\"letSearch(this)\">$1</span> : <span onclick=\"letSearchEo(this)\">$2</span>")
      // .replace(/([ก-๙]*)$/g, "<span onclick=\"letSearch(this)\">$1</span>")
      // console.log(results);

      document.getElementById("liveSearch").innerHTML = results 
    } else {
      document.getElementById("liveSearch").innerHTML = ""
    }
  } 
