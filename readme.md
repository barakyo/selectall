jQuery Select All
=====================

SelectAll will keep track of a set of checkboxes that you pass in.
The option selector allSelector will allow you to specify a checkbox
that will check/uncheck all checkboxes passed in.

Usage:
---------------------
Default constructor: `$("input[name='meeting_id']").selectall();`

With optional allSelector: `$("input[name='meeting_id']").selectall({allSelector: '#select-all-meetings'});`

Methods:
---------------------
Call methods using: `$("input[name='meeting_id']").data('selectall').METHODNAME();`

* append: Accepts an ID and will push ID into array
* search: Returns the index of the value in the array or -1 if the value is not found
* removeID: Accepts an ID and will remove this ID from the array
* removeIndex: Accepts an Index and removes the index from arary
* getList: Returns the array
