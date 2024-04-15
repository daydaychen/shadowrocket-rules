'use strict';

var body = $response.body;
var obj = JSON.parse(body);

// remove tabs
const removeTabs = ['home', 'mall'];
obj['data']['bottomBarControl']['tabs'] = obj['data']['bottomBarControl']['tabs'].filter(item => !removeTabs.includes(item['tabType']));

// set default page
obj['data']['bottomBarControl']['defaultTab'] = 'personal';

body = JSON.stringify(obj);

$done(body);
