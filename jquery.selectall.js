(function($) {
	checkedItems = [];
	checkedAll = false;

	var SelectAll = function(element, options) {
		this.element = $(element);
		this.settings = $.extend({
			allSelector: ''
		}, options || {});
		$(this.element).on('click', $.proxy(this.click, this));
		
		// If allSelector was provided, create listener for it
		if(this.settings.allSelector != '') {
			$(this.settings.allSelector).on('click', $.proxy(this.allClick, this));
		}

		this.append = function(id) {
			checkedItems.push(id);
		},

		this.search = function(id) {
			return checkedItems.indexOf(id);
		},

		this.remove = function(index) {
			checkedItems.splice(index, 1);
		},

		this.getList = function() {
			return checkedItems;
		}
	};
	
	SelectAll.prototype = {
		// Click function for checkboxes
		click: function() {
			var id = $(this.element).val();
			var index = this.search(id);
			var checked = $(this.element).prop('checked')
			if(checked) {
				// Append
				this.append(id);
			} else {
				this.remove(index);
			}
		},
		// Click function for the select all button
		allClick: function() {
			var allSelector = $(this.settings.allSelector);
			var checked = allSelector.prop('checked');
			var id = $(this.element).val();
			var index = this.search(id);
			if(checked) {
				if(index == -1) {
					this.append(id);
				}
				$(this.element).prop('checked', true);
			} else {
				this.remove(index);
				$(this.element).prop('checked', false);
			}
		}
	};

	$.fn.selectall = function(options) {
		return this.each(function() {
			var element = $(this);
			var selectall = new SelectAll(this, options);
			element.data('selectall', selectall);
		});
	};
})(jQuery);