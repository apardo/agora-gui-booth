/**
 * This file is part of agora-gui-booth.
 * Copyright (C) 2017  Agora Voting SL <nvotes@nvotes.com>

 * agora-gui-booth is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License.

 * agora-gui-booth  is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with agora-gui-booth.  If not, see <http://www.gnu.org/licenses/>.
**/

/*
 * Convenience service that returns access to is-js
 */

angular.module('is-js', []);

angular.module('is-js')
  .service('IsService', function() {
    /* jshint ignore:start */
    return is;
    /* jshint ignore:end */
  });