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
    var keyboard = new Gift({name: 'Midi Controller Keyboard',
                               price: '200+',
                               categories: ['electronics'],
                               recipientType: ['family', 'SO'],
                               link: 'http://www.amazon.com/Novation-Impulse-49-Controller-Keyboard/dp/B005M02VNW/ref=sr_1_1?s=home-garden&ie=UTF8&qid=1454963420&sr=8-1&keywords=novation+impulse+midi+keyboard',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/51%2Bu9kmPKYL._SL1312_.jpg',
                               description: 'Ultra-responsive semi weighted keyboard with aftertouch. Full DAW/plug-in control surface with 8 knobs, 9 faders and buttons.
                               Automap 4 control software enables instant hands-on access to your DAW and plug-ins.
                               Multi-function drum pads enable you to warp arpeggios, roll beats and launch clips in Ableton Live
                               Comes with Ableton Live Lite, Novations Bass Station synth and a Loopmasters sample pack',
                               tags: {gender: ['men'],
                                      ageRange: ['21-40', '40+' ],
                                      adjectives: ['sporty', 'nerdy'],
                                     },
                               rating: 5
                            });
    var brainHeadband = new Gift({name: 'Brain Sensing Headband',
                               price: '200+',
                               categories: ['electronics'],
                               recipientType: ['family', 'SO'],
                               link: 'http://www.amazon.com/Muse-Brain-Sensing-Headband-Black/dp/B00LOQR37C/ref=sr_1_1?ie=UTF8&qid=1454963858&sr=8-1&keywords=muse+headband',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/51wFa4ciIbL._SL1200_.jpg',
                               description: 'muse is your personal meditation assistant..
                               Sometimes your mind is calm and sometimes it is active. muse will guide you to a calm mind..
                               Put on the muse headband, put on your earbuds, start the app, and close your eyes. Immerse yourself within the sounds of a beach or rainforest..
                               While you meditate, muse measures whether your mind is calm or active, and translates that data into weathers sounds..
                               When you are calm, you will hear peaceful weather sounds. When your mind wanders, the weather will intensify, guiding you back to a calm state..
                               After each session, review your data, set goals, and build a deeply rewarding meditation practice that gets better every time.Kindly refer the user manual attached below for troubleshooting steps and instructions.',
                               tags: {gender: ['men', 'women'],
                                      ageRange: ['40+'],
                                      adjectives: ['shy', 'nerdy'],
                                     },
                               rating: 4
                            });
    var toaster = new Gift({name: 'Retro Series 2-Slice Toaster',
                               price: '<50',
                               categories: ['home'],
                               recipientType: ['friend'],
                               link: 'http://www.amazon.com/Nostalgia-RTOS200-Retro-2-Slice-Toaster/dp/B00ZTSHE6Q/ref=sr_1_2?ie=UTF8&qid=1454964199&sr=8-2&keywords=retro+series+toaster',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/81c7eHl6aoL._SL1500_.jpg',
                               description: 'Large slots for toasting bread, English muffins or bagel halves. Lighted control buttons with bagel, defrost, and cancel options.                               .
                               5 browning control levels. Slide -out crumb tray',
                               tags: {gender: ['women', 'men'],
                                      ageRange: ['21-40'],
                                      adjectives: ['shy', 'funny'],
                                     },
                               rating: 4
                            });
    var smartouchTechGloves = new Gift({name: 'Isotoner Smartouch Tech Gloves',
                               price: '<50',
                               categories: ['apparel'],
                               recipientType: ['friend', 'family', 'SO'],
                               link: 'http://www.amazon.com/Isotoner-Smartouch-Stretch-Gloves-Black/dp/B008ATLQ9C/ref=sr_1_1?ie=UTF8&qid=1454964488&sr=8-1&keywords=isotoner+mens+gloves',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/8172HzYJa4L._UX385_.jpg',
                               description: 'Shell Back, Knit: 100% Polyester, Palm: 94% Polyester, 6% Lycra Spandex, Lining: 100% Polyester. Imported. Hand Wash.
                               Gloves featuring elasticized cuffs and SmarTouch technology for touschreen compatibility.
                               Non-slip palms for improved grip. Stretch material for flexibility',
                               tags: {gender: ['men'],
                                      ageRange: ['21-40', '40+' ],
                                      adjectives: ['sporty', 'nerdy'],
                                     },
                               rating: 2
                            });
    var dustbuster = new Gift({name: 'Shark Cordless Handheld Vacuum',
                               price: '50-200',
                               categories: ['home'],
                               recipientType: ['friend', 'family'],
                               link: 'http://www.amazon.com/Shark%C2%A0-Pet-Perfect-Hand-SV780/dp/B0037HHFMO/ref=sr_1_15?s=vacuums&ie=UTF8&qid=1454964874&sr=1-15&keywords=dustbuster',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/61p4jpdo8EL._SL1500_.jpg',
                               description: 'The most powerful 18 volt cordless hand vacuum available.
                               Deep cleaning thanks to an extra-large detachable motorized brush for quick and easy cleanups of pet hair and ground-in dirt',
                               tags: {gender: ['women'],
                                      ageRange: ['40+'],
                                      adjectives: ['nerdy', 'funny'],
                                     },
                               rating: 5
                            });
    var bluetoothSpeaker = new Gift({name: 'Anker Portable Stereo Bluetooth Speaker',
                               price: '50-200',
                               categories: ['electronics'],
                               recipientType: ['friend', 'family'],
                               link: 'http://www.amazon.com/Anker-Portable-Bluetooth-Breakthrough-Dedicated/dp/B00RMYQU06',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/61zJUq0YdFL._SL1000_.jpg',
                               description: 'Stunning Stereo Sound: Experience your music in stunning stereo realized through dual five-watt drivers and dedicated bass port..
                               Day-long Playtime: Breakthrough 24-hour / 500-song playtime powered by a built-in 6200 mAh Li-ion battery..
                               Bluetooth 4.0: Instantly connect to your smartphone or tablet from up to 33 feet away. It remembers the last eight devices used, so reconnecting is automatic.',
                               tags: {gender: ['men'],
                                      ageRange: ['<21', '21-40' ],
                                      adjectives: ['nerdy', 'funny'],
                                     },
                               rating: 3
                            });
    var babyStroller = new Gift({name: 'Baby Jogger Single Stroller',
                               price: '<200',
                               categories: ['accessories'],
                               recipientType: ['SO', 'family'],
                               link: 'http://www.amazon.com/Baby-Jogger-Single-Stroller-Black/dp/B00G3XR8PS/ref=sr_1_1?ie=UTF8&qid=1454965577&sr=8-1&keywords=baby+jogger+city+mini+gt+single+stroller',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/611rIfMbkmL._SY355_.jpg',
                               description: 'Patented quick fold technology fold your stroller with one hand.
                               85 inch all terrain non flat tires with front wheel suspension provide a smooth comfortable ride.
                               Plush padded seat reclines to a near flat position with vented seat top.
                               Large adjustable sun canopy with peek a boo windows.
                               Adjustable handlebar suits users of all heights.
                               85" all terrain non flat tires with front wheel suspension provide a smooth comfortable ride',
                               tags: {gender: ['women'],
                                      ageRange: ['21-40'],
                                      adjectives: ['sporty', 'shy'],
                                     },
                               rating: 4
                            });
    var soundboardSystem = new Gift({name: 'Pioneer Andrew Jones Soundbar System',
                               price: '200+',
                               categories: ['SO'],
                               recipientType: ['sporty', 'funny'],
                               link: 'http://www.amazon.com/Pioneer-SP-SB23W-Andrew-Soundbar-System/dp/B00EHBPF6W/ref=sr_1_1?ie=UTF8&qid=1454965962&sr=8-1&keywords=pioneer+andrew+jones+soundbar+system',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/61wxOQ-os0L._SL1500_.jpg',
                               description: 'Composite Wood Curved Cabinet, 4 - 3" Structured Surface Mid-Woofers, 2 - 1" Soft Dome Tweeters, 6 x 28 Watt Amplifiers, Bluetooth Music Streaming Built-in',
                               tags: {gender: ['men'],
                                      ageRange: ['40+'],
                                      adjectives: ['funny', 'shy'],
                                     },
                               rating: 5
                            });
    var rollingBackpack = new Gift({name: 'Sunrise Rolling Backpack',
                               price: '<50',
                               categories: ['luggage'],
                               recipientType: ['friend', 'family'],
                               link: 'http://www.amazon.com/World-New-York-Backpack-Raspberry/dp/B007MHKYJ6/ref=sr_1_1?ie=UTF8&qid=1454966313&sr=8-1&keywords=j+world+new+york+sunrise+rolling+backpack',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/9129NhOV9ML._UX385_.jpg',
                               description: '100% Polyester, Imported, 600,10" high, 14" wide, Recessed three stage locking handle with push button,Soft and noiseless wheels for stable and controlled motion',
                               tags: {gender: ['women'],
                                      ageRange: ['<21'],
                                      adjectives: ['sporty', 'funny'],
                                     },
                               rating: 3
                            });
    var hockeyPuck = new Gift({name: 'Autographed St. Louis Blues Hockey Puck',
                               price: '50-200',
                               categories: ['sports'],
                               recipientType: ['friend'],
                               link: 'http://www.amazon.com/Autographed-Brett-Louis-Blues-Hockey/dp/B00BL6ITMI/ref=sr_1_1?ie=UTF8&qid=1454967010&sr=8-1&keywords=st.+louis+blues+autographed+hockey+puck',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/51onp-RLJGL.jpg',
                               description: '',
                               tags: {gender: ['men'],
                                      ageRange: ['40+'],
                                      adjectives: ['sporty'],
                                     },
                               rating: 2
                            });
    var wiecoArt = new Gift({name: 'Wieco Art 5 Panels Abstract Paintings',
                               price: '<50',
                               categories: ['home'],
                               recipientType: ['friend', 'SO'],
                               link: 'http://www.amazon.com/Wieco-Art-Abstract-Paintings-Decoration/dp/B00G1X7KWG/ref=sr_1_2?ie=UTF8&qid=1454968931&sr=8-2&keywords=wieco+art+5+panels',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/51Ax%2BQKrt7L.jpg',
                               description: 'High quality 100% Hand-painted oil paintings on canvas painted by our professional artist with years of oil painting experience. A great gift idea for your relatives and friends.',
                               tags: {gender: ['men', 'women'],
                                      ageRange: ['40+'],
                                      adjectives: ['shy', 'nerdy'],
                                     },
                               rating: 4
                            });
    var canopy = new Gift({name: 'Caravan Canopy',
                               price: '50-200',
                               categories: ['garden'],
                               recipientType: ['family'],
                               link: 'http://www.amazon.com/Caravan-Canopy-Titanshade-10-Feet-White/dp/B0072BVOL4/ref=sr_1_4?ie=UTF8&qid=1454969181&sr=8-4&keywords=caravan+canopy+display+shade+kit+tent',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/51w7FJj5sSL._SL1000_.jpg',
                               description: 'Strong-hammertoned, steel frame, 300 d commercial grade polyester top, Pull pin height adjuster and slider bracket, straight legs with 30mm leg diameter, Includes: 300d roller bag and stake kit',
                               tags: {gender: ['men'],
                                      ageRange: ['21-40', '40+' ],
                                      adjectives: ['sporty', 'funny'],
                                     },
                               rating: 3
                            });
    var toiletSeat = new Gift({name: ''Trimmer Polyresin Toilet Seat,
                               price: '<50',
                               categories: ['home'],
                               recipientType: ['family'],
                               link: 'http://www.amazon.com/Trimmer-17A-08-Polyresin-Toilet-Seats/dp/B000NGMOX2/ref=sr_1_2?ie=UTF8&qid=1454970933&sr=8-2&keywords=trimmer+polyresin+toilet+seat',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/81t7mPwH-QL._SL1397_.jpg',
                               description: 'Durable, Stain resistant, Easy to clean., Easy to install',
                               tags: {gender: ['women'],
                                      ageRange: ['21-40'],
                                      adjectives: ['funny'],
                                     },
                               rating: 3
                            });
    var yardStash = new Gift({name: 'YardStash Outdoor Bike Storage',
                               price: '50-200',
                               categories: ['sports'],
                               recipientType: ['friend', 'SO'],
                               link: 'http://www.amazon.com/gp/product/B00IAD3FCY/ref=s9_al_bw_g469_i1',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/81bYbPhi9iL._SL1500_.jpg',
                               description: 'Space saving size (74" wide x 30" deep x 65" high, fits two adult bicycles with room to spare) and water shedding design to easily stash two adult bikes, pool floats & supplies, kids toys, lawn mowers, long handled garden tools and other outdoor gear.',
                               tags: {gender: ['men'],
                                      ageRange: ['21-40', '40+' ],
                                      adjectives: ['sporty', 'shy'],
                                     },
                               rating: 5
                            });
    var buddyBounce = new Gift({name: 'Outdoor Play Ball',
                               price: '<50',
                               categories: ['garden'],
                               recipientType: ['friend'],
                               link: 'http://www.amazon.com/Buddy-Bounce-Outdoor-Play-Inflatable/dp/B009E8LPDK/ref=sr_1_9?ie=UTF8&qid=1454971468&sr=8-9&keywords=teens+toys',
                               imageUrl: 'http://ecx.images-amazon.com/images/I/61MvObRMn5L.jpg',
                               description: 'Kids will have ball with the BBOP.
                               To play, roll it around or climb inside and wear it.
                               Offers endless hours of energetic play.
                               Sold individually.
                               Fits kids ages 6 and up.',
                               tags: {gender: ['men', 'women'],
                                      ageRange: ['<21'],
                                      adjectives: ['sporty', 'funny'],
                                     },
                               rating: 2
                            });
    var keyboard = new Gift({name: '',
                               price: '',
                               categories: [''],
                               recipientType: ['', ''],
                               link: '',
                               imageUrl: '',
                               description: '',
                               tags: {gender: [''],
                                      ageRange: ['', '' ],
                                      adjectives: ['', ''],
                                     },
                               rating: 5
                            });

  return Gift.create([hynesToteBag, miniBasketballHoop, bandolinoValerieBoot, turtleBeachHeadset, espressoMachine, skis, teddyBear, usbCharger, koiTeapot, patioStove, keyboard, brainHeadband, toaster, smartouchTechGloves, dustbuster, bluetoothSpeaker, babyStroller, soundboardSystem, rollingBackpack, hockeyPuck, wiecoArt, canopy, toiletSeat, yardStash, buddyBounce]);


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

