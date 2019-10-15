React App snackodyssey - essentially a travel blog CMS

Models

User
name 
username
password

Countries
name
has_many :cities


Cities
belongs_to :country


Snacks
(some would belong to contry, some would belong to city?)
(i.e Okonomiyaki to Japan, Teta dela Monaca to Italy)




