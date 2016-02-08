var mongoose = require('mongoose');
var Gift = require('./models/gift');

mongoose.connect('mongodb://localhost/project3');

// our app will not exit until we have disconnected from the db.
function quit() {
  mongoose.disconnect();
  console.log('\nQuitting!');
}

// a simple error handler
function handleError(err) {
  console.log('ERROR:', err);
  quit();
  return err;
}


console.log('removing old gifts ..');
Gift.remove({})
.then(function() {
  console.log('old gifts removed');
  console.log('creating some new gifts...');
  var hynesToteBag = new Gift({name: 'Tote Bag',
                               price: '<50',
                               categories: ['accessories','luggage and travel gear'],
                               recipientType: ['family', 'SO'],
                               link: 'http://www.amazon.com/Hynes-Womens-Boutique-Handle-Handbag/dp/B00KRVAUG6/ref=sr_1_2?ie=UTF8&qid=1454949646&sr=8-2&keywords=hynes+tote+bag',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/81vUOlLmFXL._UY500_.jpg',
                               description: 'Material: synthetic leather with fabric lining
                                 Closure Type: zipper. Size:15.7*5.5*11.8 (L*W*H inches)
                                 Interior: 1 main pocket+1 interior zippered pockets +2 slip pockets
                                 Top carry handle with Detachable shoulder strap.
                                 Large capacity enough for necessary stuffs such as ipad/phones/documents etc.',
                               tags: {gender: ['women', 'men'],
                                      ageRange: ['<21', '21-40', '40+'],
                                      adjectives: ['sporty', 'nerdy', 'funny', 'shy'],
                                     },
                               rating: 3
                            });
  var miniBasketballHoop = new Gift({name: 'Mini Basketball Hoop',
                               price: '<50',
                               categories: ['sports'],
                               recipientType: ['family', 'friend'],
                               link: 'http://www.amazon.com/Spalding-Slam-Over---Door-Basketball/dp/B0085AOZIK/ref=sr_1_1?ie=UTF8&qid=1454951355&sr=8-1&keywords=spalding+mini+basketball+hoop',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/81meXB51DhL._SY450_.jpg',
                               description: '1/4" scale of NBA game backboard, 18" x 10.5" Polycarbonate Backboard, Slam Jam Breakaway Rim Design, Easily mounts with a pre-assembled bracket and over the Door Foam Padded Bracket,
                                             4" Rubber Basketball Included along with tool for easy assembly',
                               tags: {gender: ['men'],
                                      ageRange: ['<21'],
                                      adjectives: ['sporty'],
                                     },
                               rating: 2
                            });
  var bandolinoValerieBoot = new Gift({name: 'Bandolino Valerie Boot',
                               price: '50-200',
                               categories: ['apparel'],
                               recipientType: ['family', 'SO'],
                               link: 'http://www.amazon.com/Bandolino-Womens-Valerie-Boot-Black/dp/B00VEYZ1X2/ref=sr_1_24?s=apparel&ie=UTF8&qid=1454955287&sr=1-24&nodeID=679380011&keywords=bandolino+boots',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/91OrMB3iOAL._UY395_.jpg',
                               description: 'Leather, Imported. Manmade sole. Leather boot with square toe and buckled strap at ankle. Stacked heel.',
                               tags: {gender: ['women'],
                                      ageRange: ['21-40'],
                                      adjectives: ['sporty', 'funny'],
                                     },
                               rating: 4
                            });
  var turtleBeachHeadset = new Gift({name: 'Turtle Beach Gaming Headset',
                               price: '50-200',
                               categories: ['games'],
                               recipientType: ['family', 'SO'],
                               link: 'http://www.amazon.com/Turtle-Beach-Headphone-Playstation-4-3/dp/B00MNP9PD8/ref=sr_1_1?ie=UTF8&qid=1454956178&sr=8-1-spons&keywords=turtle+beach+ear+force&psc=1',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/81TizEPHPzL._SL1500_.jpg',
                               description: '7.1 Surround Sound - DTS Headphone:X delivers an amazing, 3D 360-degree sound stage with unmatched spatial accuracy. Custom DTS Surround Sound modes, each with four EQ Presets, further immerse you in your favorite games, movies, and music.
                                             Separate Volume Controls - Set your mix of PS4 or PS3 game and chat volume levels right on the headset                                             Long-Life Rechargeable Battery - Built-in rechargeable battery that delivers over 15 hours of wireless gaming
                                             Stop SHOUTING! - Turtle Beach Mic Monitoring lets you hear your own voice in the headset to avoid shouting
                                             Never Miss a Text or Call - Connect your mobile phone to hear text message notifications or take calls while gaming via the included mobile cable',
                               tags: {gender: ['men'],
                                      ageRange: ['<21', '21-40'],
                                      adjectives: ['sporty', 'nerdy'],
                                     },
                               rating: 5
                            });
  var espressoMachine = new Gift({name: 'Breville Barista Express Espresso Machine',
                               price: '200+',
                               categories: ['food and drink'],
                               recipientType: ['family', 'SO'],
                               link: 'http://www.amazon.com/Breville-BES870XL-Barista-Express-Espresso/dp/B00CH9QWOU/ref=sr_1_5?s=kitchen&ie=UTF8&qid=1454957100&sr=1-5&keywords=espresso+machine',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/81YD-1hGtGL._SL1500_.jpg',
                               description: '15 Bar Italian Pump and 1600W Thermo coil heating system
                                             Purge Function: Automatically adjusts water temperature after steam for optimal espresso extraction temperature
                                             Stainless steel conical burr grinder with 1/2 lb. sealed bean hopper
                                             67 fl.oz (2L) removable water tank with handle
                                             Newer model of the Breville BES860XL Barista Express',
                               tags: {gender: ['women','men'],
                                      ageRange: ['21-40' , '40+' ],
                                      adjectives: ['sporty', 'shy'],
                                     },
                               rating: 4
                            });
  var skis = new Gift({name: 'Line Sick Day 110 Skis',
                               price: '200+',
                               categories: ['sports'],
                               recipientType: ['SO'],
                               link: 'http://www.amazon.com/Line-Sick-Day-110-Skis/dp/B00KXZ69N4/ref=sr_1_17?s=outdoor-recreation&ie=UTF8&qid=1454957762&sr=1-17&keywords=snow+skis',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/51y%2BKVdisdL._SL1002_.jpg',
                               description: '5 Cut Sidecut, Early Taper, Early Rise Tip, Thin Tip, 4014g/Pair',
                               tags: {gender: ['women','men'],
                                      ageRange: ['21-40' , '40+' ],
                                      adjectives: ['sporty'],
                                     },
                               rating: 3
                            });
  var teddyBear = new Gift({name: 'CloudPets Talking Teddy Bear',
                               price: '<50',
                               categories: ['accessories'],
                               recipientType: ['friend', 'family'],
                               link: 'http://www.amazon.com/CloudPets-12in-Talking-Teddy-Bear/dp/B00YI1CHHG/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1454957988&sr=1-1&keywords=talking+teddy+bear',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/81LgtW8KKgL._SL1500_.jpg',
                               description: 'A message you can hug. Send a message to the CloudPets talking teddy bear from anyone from anywhere.
                               Stay in touch with the ones you love! CloudPets makes you feel like the ones you love are always near.
                               Send and receive messages from anywhere through the cloud with free app. The CloudPets app uses bluetooth technology to send your messages to your pet.
                               CloudPets heart blinks to indicate you have a message. Record and reply from your CloudPets. Parental controls are included; only invited family and friends can leave messages on your CloudPets recordable stuffed animal.
                               The CloudPets plush toy requires a compatible iOS or Android smartphone or tablet',
                               tags: {gender: ['women','men'],
                                      ageRange: ['<21' ],
                                      adjectives: ['nerdy', 'shy'],
                                     },
                               rating: 3
                            });
  var usbCharger = new Gift({name: 'USB Charger by inStream',
                               price: '<50',
                               categories: ['electronics'],
                               recipientType: ['friend', 'family'],
                               link: 'http://www.amazon.com/USB-Charger-inStream-SeptimusB-Guaranteed/dp/B00SALFN6C/ref=sr_1_1?s=wireless&ie=UTF8&qid=1454958951&sr=1-1-spons&keywords=6+port+usb+charger&psc=1',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/61mAydMs9HL._SL1500_.jpg',
                               description: 'SEVEN PORTS. NO COMPROMISE. Why settle for a 6 port or 5 port multi usb charger? Get 7 ports squeezed into an amazingly compact, high power multi usb charger. The SeptimusB measures only 4 x 1 x 3.5 inches so it can travel with you wherever you go.',
                               tags: {gender: ['women','men'],
                                      ageRange: ['<21' ],
                                      adjectives: ['nerdy', 'funny', 'shy'],
                                     },
                               rating: 5
                            });
  var koiTeapot = new Gift({name: 'Old Dutch Koi Teapot',
                               price: '<50',
                               categories: ['home'],
                               recipientType: ['friend', 'family'],
                               link: 'http://www.amazon.com/Old-Dutch-Teapot-38-Ounce-Copper/dp/B00P8UEW1K/ref=sr_1_1?s=home-garden&ie=UTF8&qid=1454959195&sr=1-1&keywords=koi+teapot',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/71F76JEjU9L._SL1500_.jpg',
                               description: 'The heat-retaining properties of cast iron allow our tetsubin teapots to keep tea at the proper serving temperature for up to an hour
                               The porcelain enamel interior keeps the taste of the tea pure and allow for easy cleaning',
                               tags: {gender: ['women'],
                                      ageRange: ['40+' ],
                                      adjectives: ['sporty', 'shy'],
                                     },
                               rating: 4
                            });
  var patioStove = new Gift({name: 'Single Burner Patio Stove',
                               price: '<50',
                               categories: ['home'],
                               recipientType: ['friend', 'family'],
                               link: 'http://www.amazon.com/Bayou-Classic-Single-Burner-Patio/dp/B0009JXYQ4/ref=sr_1_1?s=home-garden&ie=UTF8&qid=1454959440&sr=1-1&keywords=bayou+classic+single+burner+patio+stove',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/61e0uWQdvmL._SL1200_.jpg',
                               description: '13 in. Tall Heavy Duty Steel Frame. Large 16 in. x 16 in. Cooking Surface. Accommodates any size Stockpot',
                               tags: {gender: ['men'],
                                      ageRange: ['21-40', '40+' ],
                                      adjectives: ['sporty', 'funny'],
                                     },
                               rating: 2
                            });

  return Gift.create([hynesToteBag, miniBasketballHoop, bandolinoValerieBoot, turtleBeachHeadset, espressoMachine, skis, teddyBear, usbCharger, koiTeapot]);
})






.then(function(savedGifts) {
  console.log('Gifts ' + savedGifts + ' have been saved.');
  return Gift.find({});
})
.then(function(allGifts){
  console.log('Printing all gifts...');
  allGiftss.forEach(function(gift){
    console.log(gift);
  });
  quit();
});

