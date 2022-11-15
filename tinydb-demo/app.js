var TinyDB = require('tinydb');
test_db = new TinyDB('./test.json');
 
test_db.onReady = function() {
    console.log('DB Ready');
  
    test_db.insertItem({
        latitude: 20.123,
        longitude: 90.123,
        title: "Example",
        description: "lorem"
    }, function(err, key, value) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(("Insert" + key + value))
    });

    test_db.find({
        title: "Example",
    }, function(err, key, value) {
      if (err) {
        console.log(err);
        return;
      }

      console.log(key, value)
    });
    
    // // get info from DB
    // test_db.getInfo('title', function(err, key, value) {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }
      
    //   console.log('[getInfo] ' + key + ' : ' + value);
    // });
    
  }