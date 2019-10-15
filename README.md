React App snackodyssey - essentially a travel blog CMS
Backend rails api in: https://github.com/melzreal/snack-odyssey-backend


Models

User
name 
email
password

Countries
name
has_many :cities


Places
belongs_to :country
has_many :snacks


Snacks
(some would belong to contry, some would belong to city?)
(i.e Okonomiyaki to Japan, Teta dela Monaca to Italy)




