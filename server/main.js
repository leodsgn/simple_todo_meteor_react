import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks';

Meteor.startup(() => {
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
});
