# muh startpage

I started to feel that the Momentum™ extension slowly started getting
bloated. Maybe that's because I've been hanging out with the GNU/Linux crowd
too much lately…

Anyhow, dis here be a simple startpage with the following 'features' and todos:

☑ keep it somewhat¹ lightweight  
☑ it shows date, time and greets you  
☑ it has links to sites I frequent  

¹: it cold-loads in ~30ms 

I use [Change New Tab](https://chrome.google.com/webstore/detail/change-new-tab/mocklpfdimiadpbgamlgehpgpodggahe)
to make it my new-tab page on Chrome. I dunno about
[Firefox](https://www.reddit.com/r/firefox/comments/7d4nto/how_do_you_select_a_custom_url_as_your_new_tab/dpv7iax/).

The background is compressed with:  
```ℵ convert -strip -interlace Plane -gaussian-blur 0.05 -quality 85% background_micro.jpg super_micro.jpg```
and simply converted to base64 with:
```ℵ cat super_micro.jpg | base64```

Feel free to steal it, but don't forget to share your versions with me 😉.  
If you have any ideas or improvements feel free to open an issue.
