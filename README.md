# PokeSearch
> [!WARNING]
> **It's a WIP of a project I'm currently working on, it's not finished nor final**

# **What is it?**
it's a window that allow you to search for any pokemon from any site you are.

Currently I'm working on an implementation with Pokemon Showdown.

Ok that's it.
# **How to use it**
The only to currently use it is trough ***BETA.js***, inject it yourself or use that bookmarklet to run it *(favorite it then click on it to use it)*

```html
<a href="javascript:(function(){let s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/Z-Kirby90/PokeSearch@main/BETA.js';document.body.appendChild(s);})();">
Drag me to bookmarks or something
</a>
```
The script to inject if you don't want a bookmarklet
```javascript
function inject() {
  let s=document.createElement('script');
  s.src=`https://cdn.jsdelivr.net/gh/Z-Kirby90/PokeSearch@main/BETA.js`;
  document.body.appendChild(s);
}
inject()
```
> [!WARNING]
> **The script in the cdn.jsdelivr and the github are identical, you can verify yourself**
