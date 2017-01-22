#!/bin/bash
set -e

# Coffee counter
#
# LICENSE:    MIT
#
# @project    coffee
# @package    app
# @author     André Lademann <vergissberlin@googlemail.com>

########################################################################################################################
# Include user interface and helper
#

. ${APP_SRC}/app/lib/console.sh
. ${APP_SRC}/app/lib/validate.sh

########################################################################################################################
# Start application
#

/bin/bash ${APP_SRC}/app/start/10-structure.sh
/bin/bash ${APP_SRC}/app/start/20-configuration.sh
/bin/bash ${APP_SRC}/app/start/30-node.sh
/bin/bash ${APP_SRC}/app/start/40-network.sh


########################################################################################################################
# Log output
#

pm2 logs ${APP_NAME} --lines 1000
