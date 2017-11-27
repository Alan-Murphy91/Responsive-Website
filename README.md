Hosted location -> https://alan-murphy91.github.io/Responsive-Website/



# Website explanation
This website is my submission for the final project of stream one. It is the front end design of a website for a fictitious entity named
'Omicron Technologies' that specialise in interstellar private charter. Set in the distance future, this site would be akin to a modern day
private jet booking service. 

# HTML and CSS

<strong>HTML</strong><br/>
I have strived where possible to use semantic markup for the website to allow the hypothetical bots and search engine algorithms to easily
identify the layout of the website. For the mandatory form I have used html input fields aswell as an option tag which allows for a dropdown
feature in the formgroup. Inside the semantic tags I have used divs and spans with their associated id's and classes to customise the look
and feel of the website on both desktop and responsive viewports.

<strong>CSS</strong><br/>
-CSS Grid<br/>
The entirety of the container system in use in this website is structured by CSS grid. I find this framework to be very effective and intend
on using it for the forseeable future where possible. This framework has allowed me to align content which required very precise positioning
such as the 'on-demand' pages on desktop and mobile. Alongside the use of viewport height (vh) I was able to quickly re-purpose the code
on mobile to desktop and vice versa.

-Plugins<br/>
I have used two major external CSS features on this website to achieve the design I had in mind at the outset. The first is Alvaro Trigo's 
fullpage plugin. This allows me to seamlessly slide from page to page in the one-page scroller theme I have used for the website. I was
able to customise these features to suit the websites style. The second is a responsive menu plugin that generates an overlay div on click
instead of a more traditional drop-down. Also, I used font-awesome for the animated chevron and the timer icon beside 'next departure' on page 4.

-Media Queries<br/>
As advised in the course content I have used seperate stylesheets for desktop and responsive view. For the responsive stylesheet I
have included many media queries which target specific viewport widths. Whilst primarily setting the meta tag for viewport as
initial-scale=1 in the head of my html, alongside the multitude of media queries I was able to desploy a similar website with all of
the same features on responsive devices. I have used chromes developer tools to ensure that the website displays correctly on 
a number of modern devices.

# JavaScript

<strong>jQuery</strong><br/>
jQuery plays an extremely important role in the website as it provides for the function of the fullpage and responsive menu plugins. Aside
from that, I have used jQuery for two seperate items in the site. Firstly, for a more realistic feel to the 'on-demand' page. I have made
a simple countdown feature for the next flight by parsing the integer from the html and subtracting by 1 each second whilst updating
the html with a setInterval function.

Secondly, I have used jQuery to design the form feature. For this I have simply used jQuery's .val() and .html() methods to determine
if inputs had been place inside the input fields. For the email field I included a search for a '@' by checking if the indexOf '@' was 
not equal to -1. When all fields had filled correctly and the submit button was clicked, I used jQuery to have the submit button 
disappear and inlude a span which read 'sent'. If the forms were not sufficiently filled, I used the .css() method to color the input
title's css to red indicating an error.

<strong>Jasmine</strong><br/>
I have included a Jasmine testing suite which verifies the logic used in the form.

# UX/UI

<strong>User roles</strong><br/>
I have based the design of the site on three users.

The first will have visited the site before and may even be a member. For this person there is a login included at the very first page which
is highlighted to ensure they can quickly and with little fuss be directed towards their account information.

Secondly I have considered a prospective client, one who is browsing the site and comparing with similar services. For this user I have
detailed the suite of vehicles used by the site and emphasised their characteristics. Furthermore, there is a hero image with a 
call-to-action button on third page of the desktop site emphasising the stress-free and efficient procedure for booking an excursion
with Omicron.

Finally there is the casual browser who may not have any serious plans to book a flight. In an attempt to lure a 'conversion' from this
client I have used the on-demand feature of the website. I have used the countdown feature and a simple call-to-action 'book' button
to make a quick unintended trip seem more appealing. Particularly with regard to the first two options which feature a very small
flight duration. 


<strong>User Experience</strong><br/>
When making the site and keeping user experience in mind I decided it would be best to make sure that I satisfy each of Nielson's
10 usability heuristics.

-Visibility of system status<br/>
To merge style with usability, I have ensured that the dot navigation on the right side of the page displays brightest at the current
page, this allows a user to determine how big the site is, aswell as where they are in relation to it. There is a clear menu on the first page
and a very transparent footer at the end. This ensures the user will not become lost or confused as they browse the site. On mobile
a clearly indicated hamburger menu will quickly transport the user to whichever part of the site they wish to view.

-Match between system and the real world<br/>
I have strived to ensure that all phrases and concepts touched on in the website will be familiar and easily understood to the imagined
users of the site

-User control and freedom<br/>
One of the key benefits of selecting a single page scroll design is that the user can easily identify where they are in relation to the
website. There are no confusing or unnecessary page loads and in a more fleshed out full version of the site I would include many
indicators to guide the user back to an initial state after having unwantedly landing on something like a booking page

-Consistency and standards<br/>
Any advertisement to another part of the webpage has always been referencing a similar section. In the case of 'book' or 'reserve' its
a clear indicator towards the part of the website where a booking can be made. I have been careful not to overextend the design into that
of a feature containing too many differing destinations.

-Error prevention<br/>
This is largely taken care of in the one interactive feature of the design, the form. As one can see any attempt at submitting the form
having not correctly input a value the relevant fields will provoke a red warning font which subtely guides the user to the problem.
Furthermore, the form will not send until all data has been input correctly.

-Recognition rather than recall<br/>
I feel that this heuristic did not apply as strongly as the rest of the site. The design is rather lightweight and is not as content
laden as, for example, a modern airline booking website. The user in this case should not need to commit any memory chunks with regard
to the use of the website.

-Aesthetic and minimalist design<br/>
Each scrollable page takes up the full viewport and lays out its relevant content in a centered container. I have been careful not to 
overload content on any page and believe I have achieved a degree of minimalism that does not threshold into a website that is lacking
in content.

-Help users recognize, diagnose, and recover from errors<br/>
This is covered in 'Error prevention'

-Help and documentation<br/>
For further information I have included links to site map and site usage which would feature on the full site. This would ideally contain
information on how best the user can go about using the site.




