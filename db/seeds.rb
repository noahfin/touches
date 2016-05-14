# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Touch.create(calls: 0, emails: 0, mail: 0, postcards: 0,  advertisements: 0)
Touch.create(calls: 0, emails: 0, mail: 0,  postcards: 0, advertisements: 0)
Touch.create(calls: 0, emails: 0, mail: 0, postcards: 0, advertisements: 0)
Touch.create(calls: 0, emails: 0, mail: 0, postcards: 0,  advertisements: 0)
Contact.create(name: "Eric Hegadhl", email: "eric.hegdahl@generalassemb.ly", company: 'General Assembly', address: "New york", phone: "222 234-5503", touch_id: 1) 
Contact.create(name: "Caludia Matos", email: "claudia.matos@generalassemb.ly", company: 'General Assembly',  address: "New york", phone: "222 564-7803", touch_id: 2) 
Contact.create(name: "jaden Carver", email: "jaden.carver@generalassemb.ly",company: 'General Assembly',  address: "New york", phone: "222 736-8583", touch_id: 3) 
Contact.create(name: "kimberly Chodnicki", email: "kimberly.chodnicki@generalassemb.ly", company: 'General Assembly',  address: "New york", phone: "222 456-6801", touch_id: 4) 


