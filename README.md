counter.js
=========

Counter.js helps you to integrate stylish counter for your website.
It automaticaly starts couting from zero to your given limit.

How to use counter.js
--------------------

Include counter.js to your page:

    <script src="counter.js"></script>
  
Create an element (HTML):
  
    <span id="counter"></span> and counting ....
  
call counter function:
  
    <script>
        $('#counter').counter({
                            limit:500,      // Your count limit
                            speed:10000     // Counting speed
                            },
                            function(){     // Callback function
                              alert("completed")
                              
                            });
    </script
  
output:
  
    75 and counting .....
Live Demo
---------
<http://shankpaul.github.com/counterjs/>
