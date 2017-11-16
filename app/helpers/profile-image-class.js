import Ember from 'ember';

export function profileImageClass(params/*, hash*/) {
  let profileClass = params[0];

  if (Ember.isPresent(profileClass)) {
    return profileClass;
  }
  else {
    return 'no-face';
  }
}

export default Ember.Helper.helper(profileImageClass);
