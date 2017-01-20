module.exports = {



    // Directories Node-RED
    // --------------------

    // By default, all user data is stored in the Node-RED install directory. To
    // use a different location, the following property can be used
    userDir: '/usr/src/app/app/node-red/',

    // Node-RED scans the `nodes` directory in the install directory to find nodes.
    // The following property can be used to specify an additional directory to scan.
    nodesDir: '/usr/src/app/node-red-nodes/node_modules/',



    // Configuration Node-RED
    // ----------------------

    // Port
    uiPort: process.env.PORT || 80 ,

    // Retry time in milliseconds for MQTT connections
    mqttReconnectTime: 15000,

    // Retry time in milliseconds for Serial port connections
    serialReconnectTime: 15000,

    // The maximum length, in characters, of any message sent to the debug sidebar tab
    debugMaxLength: 1000,

    // The file containing the flows. If not set, it defaults to flows_<hostname>.json
    flowFile: 'flows.json',

    // To enabled pretty-printing of the flow within the flow file, set the following
    //  property to true:
    flowFilePretty: true,

    // Colourise the console output of the debug node
    debugUseColors: true,



    // Securing Node-RED
    // -----------------

    // By default, credentials are encrypted in storage using a generated key. To
    // specify your own secret, set the following property.
    // If you want to disable encryption of credentials, set this property to false.
    // Note: once you set this property, do not change it - doing so will prevent
    // node-red from being able to decrypt your existing credentials and they will be
    // lost.
    credentialSecret: 'pmBNlEZnINgC0qy1hgRgMgGk' || process.env.SECRET,


    // To password protect the Node-RED editor and admin API, the following
    // property can be used. See http://nodered.org/docs/security.html for details.
    adminAuth: {
        type: 'credentials',
        users: [{
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            permissions: '*'
        }],
        default: {
            permissions: 'read'
        }
    },

    // Global context
    functionGlobalContext: {
        process: process,
        os: require('os'),
        // octalbonescript:require('octalbonescript'),
        // jfive:require('johnny-five'),
        // j5board:require('johnny-five').Board({repl:false})
    },

    // Theme
    editorTheme: {
       page: {
           title: 'coffee bin',
           favicon: '/usr/src/app/public/images/logo/coffee-bin.png',
           css: '/usr/src/app/public/css/node-red.css'
       },
       header: {
           title: null,
           image: '/usr/src/app/public/images/logo/coffee-bin-text-bold-white.svg', // or null to remove image
           url: 'https://github.com/vergissberlin/raspberry-coffee'
       },
       login: {
           image: '/usr/src/app/public/images/logo/coffee-bin.svg' // a 256x256 image
       }
   },

   // Logging
   // Configure the logging output
   logging: {
       // Only console logging is currently supported
       console: {
           // Level of logging to be recorded. Options are:
           // fatal - only those errors which make the application unusable should be recorded
           // error - record errors which are deemed fatal for a particular request + fatal errors
           // warn - record problems which are non fatal + errors + fatal errors
           // info - record information about the general running of the application + warn + error + fatal errors
           // debug - record information which is more verbose than info + info + warn + error + fatal errors
           // trace - record very detailed logging + debug + info + warn + error + fatal errors
           level: 'info',
           // Whether or not to include metric events in the log output
           metrics: false,
           // Whether or not to include audit events in the log output
           audit: false
       }
   }
}
