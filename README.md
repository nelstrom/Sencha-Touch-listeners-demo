This Git repository includes all of the source code used in creating a tutorial about listeners in Sencha Touch.

The tutorial includes several checkpoints:

* [Blank slate][00] - the application skeleton
* [Simple logger][01] - showing several different ways of attaching a listener to a panel
* [addEvent('interact')][02] - demonstrating how to add custom events to a component
* [Capture more interactions][03] - enhancing the custom 'interact' event
* [Report interactions with a template][04] - collecting stats in an object, and using it to populate a template
* [Add reset button][05] - adding a button that resets all counters
* [One time listeners][06] - creating listeners that expire after a single use
* [Delays and buffers][07] - creating buffered and delayed listeners

Using this repository to follow the screencast
----------------------------------------------

First, you'll have to clone this repository:

    git clone git://github.com/nelstrom/Sencha-Touch-listeners-demo.git

Change into the directory:

    cd Sencha-Touch-listeners-demo

By default, the `git clone` command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    git checkout -b 00_blank_slate origin/00_blank_slate
    git checkout -b 01_simple_logger origin/01_simple_logger
    git checkout -b 02_addEvent_interact origin/02_addEvent_interact
    git checkout -b 03_capture_more_interactions origin/03_capture_more_interactions
    git checkout -b 04_report_interactions_with_a_template origin/04_report_interactions_with_a_template
    git checkout -b 05_add_reset_button origin/05_add_reset_button
    git checkout -b 06_one_time_listeners origin/06_one_time_listeners
    git checkout -b 07_delays_and_buffers origin/07_delays_and_buffers

You can review the list of local branches by running:

    git branches

And you can switch between branches with the `checkout` command. For example, to check out the `03_capture_more_interactions` branch, run:

    git co 03_capture_more_interactions

Live demo
---------

You can try out the demo here:

* [http://listeners-demo.heroku.com/][d]

This uses the code from the branch [05_add_reset_button][05].

[00]: https://github.com/nelstrom/Sencha-Touch-listeners-demo/tree/00_blank_slate
[01]: https://github.com/nelstrom/Sencha-Touch-listeners-demo/tree/01_simple_logger
[02]: https://github.com/nelstrom/Sencha-Touch-listeners-demo/tree/02_addEvent_interact
[03]: https://github.com/nelstrom/Sencha-Touch-listeners-demo/tree/04_report_interactions_with_a_template
[04]: https://github.com/nelstrom/Sencha-Touch-listeners-demo/tree/04_report_interactions_with_a_template
[05]: https://github.com/nelstrom/Sencha-Touch-listeners-demo/tree/05_add_reset_button
[06]: https://github.com/nelstrom/Sencha-Touch-listeners-demo/tree/06_one_time_listeners
[07]: https://github.com/nelstrom/Sencha-Touch-listeners-demo/tree/07_delays_and_buffers
[d]: http://listeners-demo.heroku.com/