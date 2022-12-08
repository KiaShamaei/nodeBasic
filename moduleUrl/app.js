const myURL =
  new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

  //get all url with href  
//   console.log(myURL.href);

  //get host  is include port but hostname without port 
//   console.log(myURL.host)

  //get host  pathname
//   console.log(myURL.pathname)

  //get host  search
//   console.log(myURL.search)

  //get host  searchParams object of search param key value 
//   console.log(typeof myURL.searchParams)

  //add search param 

  myURL.searchParams.append("kia", "bala")
  console.log(myURL.searchParams)
  console.log(myURL.href)

