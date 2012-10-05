Template.notifications.helpers({
  notifications: function(){
    return Notifications.find({userId: Meteor.user()._id}, {sort: {timestamp: -1}});
  },
  notification_count: function(){
  	var notifications=Notifications.find({userId: Meteor.user()._id, read: false}).fetch();
  	if(notifications.length==0){
  		return 'No notifications';
  	}else if(notifications.length==1){
  		return '1 notification';
  	}else{
  		return notifications.length+' notifications';
  	}
  },
  notification_class: function(){
    var notifications=Notifications.find({userId: Meteor.user()._id, read: false}).fetch();
  	if(notifications.length==0)
  }
});

Template.notifications.events({
	'click .notifications-toggle': function(e){
    e.preventDefault();
		$('body').toggleClass('notifications-open');
	},
	'click .mark-as-read': function(){
		Meteor.call('markAllNotificationsAsRead', Meteor.user());
	}
})