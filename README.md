chars.js
========

A very simple character counter jQuery plugin.


Usage
========
Just use same id and class for the containers and you are done.

Example:
========
This will work as well

In HTML:

`<textarea id="text-1"></textarea>
<span class="text-1"></span>`

In js:

`chars(400, "#text-1", ".text-1");`

Here 400  is the maximum number of characters and "#text-1" is the id of textarea and ".text-1" class name of the text container


Update:
==========
0.2:
	Now you dont need to specifically use id for textarea and class for text container.
	It is now more handy. Just provide the textarea position on first argument and text
	container id  or class name on the second argument
