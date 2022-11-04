var MongoClient = require( 'mongodb' ).MongoClient;

//nodemongo is the database name
var url = "mongodb://localhost:27017/nodemongo";

//Connect to the db
MongoClient.connect( url, {
  useNewUrlParser: true, useUnifiedTopology: true
}, function ( err, db ) {
  // if ( err ) throw err;
  // console.log( "Database created!" );
  // db.close();

  var dbo = db.db( "nodemongo" );
  // dbo.createCollection( "customers", function ( err, res ) {
  //   if ( err ) throw err;
  //   console.log( "Collection created!" );
  //   db.close();
  // } );
  var custData = { name: "Westcliff Inc", address: "Irvine, CA" };
  dbo.collection( "customers" ).insertOne( custData, function ( err, res ) {
    if ( err ) throw err;
    console.log( "1 document inserted" );
    db.close();
  } )

} );

