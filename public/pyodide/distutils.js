var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="build/distutils.data";var REMOTE_PACKAGE_BASE="distutils.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","distutils",true,true);Module["FS_createPath"]("/lib/python3.9/distutils","tests",true,true);Module["FS_createPath"]("/lib/python3.9/distutils","command",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:512155,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1390,2452,3487,4453,5714,6926,7958,9311,10311,11101,12122,13277,14630,15861,17254,18668,19935,21404,22720,23611,24726,25739,26762,27852,29026,30334,31685,32852,34132,35402,36618,37845,39253,40457,41792,43173,44493,45766,47254,48435,49654,50936,52140,53102,54452,55407,56600,57951,59174,60367,61429,62638,63994,64981,66457,67792,69173,70251,71575,72467,73976,75575,76868,78191,79261,80710,82048,83088,84243,85457,86610,87848,89053,90418,91789,92844,94155,95440,96770,98128,99217,100242,101144,102121,103008,104109,105443,106506,107779,109167,110325,111484,112774,113994,115214,116581,117979,119335,120695,122005,123457,124786,126235,127614,128962,130250,131564,132780,134019,135145,136390,137884,139237,140610,141739,143193,144584,145869,147033,148350,149452,150546,151602,152922,154466,155651,156801,158159,159499,160622,161737,162883,164041,165334,166584,167681,168825,169913,171094,171940,173093,174254,175329,176524,177629,178527,179514,180285,181414,182872,184102,185468,186722,187937,188903,190071,191151,192222,193277,194576,195880,197039,198401,198968,200105,201453,202427,203708,204900,206246,207685,209110,210201,211455,212878,213972,214907,215916,216850,217736,218796,220086,221361,222874,224066,225113,226403,227389,228619,230070,231252,232365,233453,234796,236034,237165,238289,239296,240422,241267,242469,243755,244622,245705,246424,247083,248394,249587,250764,251900,252769,253612,254660,255805,256734,257772,259043,260157,261266,262219,263151,263930,264389,265266,266475,267769,268993,269834,270933,272041,273246,274519,275563,276666,277860,279001,280116,281104,282160,283334,284418,285619,286757,287910,289097,290012,290860,292049,293003,293808,294826,295917,296839,298086,299203,300541,301719,302913,304051,305204,306086,307157,308012,309057,309943,310756,311817,312809,313856,314963,316090,316753,318012,319130,320355,321276,322395,323483,324435,325653,326751,327704,328741,329959,331050,331734,332665,333768,334857,335976,337106,337707,338697,339651,341003,342216,343264,344060,345042,346131,346827,347519,348183,349249,350398,351316,352429,353714,354492,355709,356783,357773,358650,359276,360125,361238,362360,363394,364343,365594,366900,368296,369538,370255,371278,372300,373560,374859,376124,377348,378393,379618,380371,381453,382629,383779,384717,385856,387040,388066,389159,390331,391533,392702,393932,395082,396183,397174,398487,399819,401114,402340,403528,404665,405806,406998,407954,408829,409949,410974,412150,413213,414437,415406,416566,417693,418708,419853,420936,422213,423599,424634,425574,426618,427669,428958,430076,431101,432218,433443,434583,435786,436995,438318,439502,440919,441882,442896,443909,445090,446224,447314,448092,449256,450345,451120,452142,453153,454174,455389,456479,457436,458619,460042,461144,462201,463515,464618,465729,466919,468076,469379,470481,471566,472479,473623,474811,475657,476812,478096,479360,480490,481609,482867,483894,485086,486242,487369,488375,489603,490675,491686,492877,494118,495201,496348,497516,498787,499812,500932,502094,503147,504351,505448,506598,507775,509004,509948,511021],sizes:[1390,1062,1035,966,1261,1212,1032,1353,1e3,790,1021,1155,1353,1231,1393,1414,1267,1469,1316,891,1115,1013,1023,1090,1174,1308,1351,1167,1280,1270,1216,1227,1408,1204,1335,1381,1320,1273,1488,1181,1219,1282,1204,962,1350,955,1193,1351,1223,1193,1062,1209,1356,987,1476,1335,1381,1078,1324,892,1509,1599,1293,1323,1070,1449,1338,1040,1155,1214,1153,1238,1205,1365,1371,1055,1311,1285,1330,1358,1089,1025,902,977,887,1101,1334,1063,1273,1388,1158,1159,1290,1220,1220,1367,1398,1356,1360,1310,1452,1329,1449,1379,1348,1288,1314,1216,1239,1126,1245,1494,1353,1373,1129,1454,1391,1285,1164,1317,1102,1094,1056,1320,1544,1185,1150,1358,1340,1123,1115,1146,1158,1293,1250,1097,1144,1088,1181,846,1153,1161,1075,1195,1105,898,987,771,1129,1458,1230,1366,1254,1215,966,1168,1080,1071,1055,1299,1304,1159,1362,567,1137,1348,974,1281,1192,1346,1439,1425,1091,1254,1423,1094,935,1009,934,886,1060,1290,1275,1513,1192,1047,1290,986,1230,1451,1182,1113,1088,1343,1238,1131,1124,1007,1126,845,1202,1286,867,1083,719,659,1311,1193,1177,1136,869,843,1048,1145,929,1038,1271,1114,1109,953,932,779,459,877,1209,1294,1224,841,1099,1108,1205,1273,1044,1103,1194,1141,1115,988,1056,1174,1084,1201,1138,1153,1187,915,848,1189,954,805,1018,1091,922,1247,1117,1338,1178,1194,1138,1153,882,1071,855,1045,886,813,1061,992,1047,1107,1127,663,1259,1118,1225,921,1119,1088,952,1218,1098,953,1037,1218,1091,684,931,1103,1089,1119,1130,601,990,954,1352,1213,1048,796,982,1089,696,692,664,1066,1149,918,1113,1285,778,1217,1074,990,877,626,849,1113,1122,1034,949,1251,1306,1396,1242,717,1023,1022,1260,1299,1265,1224,1045,1225,753,1082,1176,1150,938,1139,1184,1026,1093,1172,1202,1169,1230,1150,1101,991,1313,1332,1295,1226,1188,1137,1141,1192,956,875,1120,1025,1176,1063,1224,969,1160,1127,1015,1145,1083,1277,1386,1035,940,1044,1051,1289,1118,1025,1117,1225,1140,1203,1209,1323,1184,1417,963,1014,1013,1181,1134,1090,778,1164,1089,775,1022,1011,1021,1215,1090,957,1183,1423,1102,1057,1314,1103,1111,1190,1157,1303,1102,1085,913,1144,1188,846,1155,1284,1264,1130,1119,1258,1027,1192,1156,1127,1006,1228,1072,1011,1191,1241,1083,1147,1168,1271,1025,1120,1162,1053,1204,1097,1150,1177,1229,944,1073,1134],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_build/distutils.data")}Module["addRunDependency"]("datafile_build/distutils.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/distutils/bcppcompiler.py",start:0,end:14894,audio:0},{filename:"/lib/python3.9/distutils/filelist.py",start:14894,end:27726,audio:0},{filename:"/lib/python3.9/distutils/dep_util.py",start:27726,end:31217,audio:0},{filename:"/lib/python3.9/distutils/debug.py",start:31217,end:31356,audio:0},{filename:"/lib/python3.9/distutils/_msvccompiler.py",start:31356,end:51363,audio:0},{filename:"/lib/python3.9/distutils/core.py",start:51363,end:60239,audio:0},{filename:"/lib/python3.9/distutils/log.py",start:60239,end:62208,audio:0},{filename:"/lib/python3.9/distutils/errors.py",start:62208,end:65785,audio:0},{filename:"/lib/python3.9/distutils/spawn.py",start:65785,end:70177,audio:0},{filename:"/lib/python3.9/distutils/file_util.py",start:70177,end:78325,audio:0},{filename:"/lib/python3.9/distutils/text_file.py",start:78325,end:90808,audio:0},{filename:"/lib/python3.9/distutils/config.py",start:90808,end:95635,audio:0},{filename:"/lib/python3.9/distutils/sysconfig.py",start:95635,end:116267,audio:0},{filename:"/lib/python3.9/distutils/version.py",start:116267,end:128781,audio:0},{filename:"/lib/python3.9/distutils/versionpredicate.py",start:128781,end:133914,audio:0},{filename:"/lib/python3.9/distutils/fancy_getopt.py",start:133914,end:151698,audio:0},{filename:"/lib/python3.9/distutils/msvc9compiler.py",start:151698,end:182151,audio:0},{filename:"/lib/python3.9/distutils/cygwinccompiler.py",start:182151,end:198531,audio:0},{filename:"/lib/python3.9/distutils/util.py",start:198531,end:219444,audio:0},{filename:"/lib/python3.9/distutils/archive_util.py",start:219444,end:228016,audio:0},{filename:"/lib/python3.9/distutils/dir_util.py",start:228016,end:235794,audio:0},{filename:"/lib/python3.9/distutils/cmd.py",start:235794,end:253873,audio:0},{filename:"/lib/python3.9/distutils/dist.py",start:253873,end:304258,audio:0},{filename:"/lib/python3.9/distutils/ccompiler.py",start:304258,end:351675,audio:0},{filename:"/lib/python3.9/distutils/msvccompiler.py",start:351675,end:375215,audio:0},{filename:"/lib/python3.9/distutils/__init__.py",start:375215,end:375451,audio:0},{filename:"/lib/python3.9/distutils/extension.py",start:375451,end:385966,audio:0},{filename:"/lib/python3.9/distutils/README",start:385966,end:386208,audio:0},{filename:"/lib/python3.9/distutils/unixccompiler.py",start:386208,end:400962,audio:0},{filename:"/lib/python3.9/distutils/tests/test_check.py",start:400962,end:406673,audio:0},{filename:"/lib/python3.9/distutils/tests/test_build_clib.py",start:406673,end:411304,audio:0},{filename:"/lib/python3.9/distutils/tests/xxmodule.c",start:411304,end:424219,audio:0},{filename:"/lib/python3.9/distutils/tests/test_build_ext.py",start:424219,end:444852,audio:0},{filename:"/lib/python3.9/distutils/tests/test_msvccompiler.py",start:444852,end:447697,audio:0},{filename:"/lib/python3.9/distutils/tests/test_filelist.py",start:447697,end:459172,audio:0},{filename:"/lib/python3.9/distutils/tests/test_bdist_dumb.py",start:459172,end:462077,audio:0},{filename:"/lib/python3.9/distutils/tests/test_bdist.py",start:462077,end:463970,audio:0},{filename:"/lib/python3.9/distutils/tests/test_file_util.py",start:463970,end:468383,audio:0},{filename:"/lib/python3.9/distutils/tests/test_config.py",start:468383,end:472275,audio:0},{filename:"/lib/python3.9/distutils/tests/test_sdist.py",start:472275,end:489322,audio:0},{filename:"/lib/python3.9/distutils/tests/test_bdist_msi.py",start:489322,end:490125,audio:0},{filename:"/lib/python3.9/distutils/tests/test_core.py",start:490125,end:494202,audio:0},{filename:"/lib/python3.9/distutils/tests/test_config_cmd.py",start:494202,end:497225,audio:0},{filename:"/lib/python3.9/distutils/tests/test_register.py",start:497225,end:506990,audio:0},{filename:"/lib/python3.9/distutils/tests/test_dep_util.py",start:506990,end:509810,audio:0},{filename:"/lib/python3.9/distutils/tests/test_version.py",start:509810,end:513260,audio:0},{filename:"/lib/python3.9/distutils/tests/test_build.py",start:513260,end:515225,audio:0},{filename:"/lib/python3.9/distutils/tests/test_install_lib.py",start:515225,end:519199,audio:0},{filename:"/lib/python3.9/distutils/tests/test_upload.py",start:519199,end:526338,audio:0},{filename:"/lib/python3.9/distutils/tests/test_bdist_rpm.py",start:526338,end:531346,audio:0},{filename:"/lib/python3.9/distutils/tests/test_archive_util.py",start:531346,end:545647,audio:0},{filename:"/lib/python3.9/distutils/tests/test_cmd.py",start:545647,end:549482,audio:0},{filename:"/lib/python3.9/distutils/tests/test_install_scripts.py",start:549482,end:552107,audio:0},{filename:"/lib/python3.9/distutils/tests/test_clean.py",start:552107,end:553548,audio:0},{filename:"/lib/python3.9/distutils/tests/test_unixccompiler.py",start:553548,end:558176,audio:0},{filename:"/lib/python3.9/distutils/tests/Setup.sample",start:558176,end:560425,audio:0},{filename:"/lib/python3.9/distutils/tests/test_bdist_wininst.py",start:560425,end:561815,audio:0},{filename:"/lib/python3.9/distutils/tests/test_dir_util.py",start:561815,end:566469,audio:0},{filename:"/lib/python3.9/distutils/tests/test_build_py.py",start:566469,end:572804,audio:0},{filename:"/lib/python3.9/distutils/tests/test_install.py",start:572804,end:581416,audio:0},{filename:"/lib/python3.9/distutils/tests/test_spawn.py",start:581416,end:586876,audio:0},{filename:"/lib/python3.9/distutils/tests/test_install_headers.py",start:586876,end:588114,audio:0},{filename:"/lib/python3.9/distutils/tests/test_build_scripts.py",start:588114,end:591707,audio:0},{filename:"/lib/python3.9/distutils/tests/test_sysconfig.py",start:591707,end:602752,audio:0},{filename:"/lib/python3.9/distutils/tests/test_extension.py",start:602752,end:605520,audio:0},{filename:"/lib/python3.9/distutils/tests/test_dist.py",start:605520,end:624600,audio:0},{filename:"/lib/python3.9/distutils/tests/test_install_data.py",start:624600,end:627177,audio:0},{filename:"/lib/python3.9/distutils/tests/test_log.py",start:627177,end:629041,audio:0},{filename:"/lib/python3.9/distutils/tests/__init__.py",start:629041,end:630385,audio:0},{filename:"/lib/python3.9/distutils/tests/test_msvc9compiler.py",start:630385,end:636423,audio:0},{filename:"/lib/python3.9/distutils/tests/test_util.py",start:636423,end:647995,audio:0},{filename:"/lib/python3.9/distutils/tests/test_versionpredicate.py",start:647995,end:648275,audio:0},{filename:"/lib/python3.9/distutils/tests/test_cygwinccompiler.py",start:648275,end:653911,audio:0},{filename:"/lib/python3.9/distutils/tests/includetest.rst",start:653911,end:653936,audio:0},{filename:"/lib/python3.9/distutils/tests/support.py",start:653936,end:660414,audio:0},{filename:"/lib/python3.9/distutils/tests/test_text_file.py",start:660414,end:663850,audio:0},{filename:"/lib/python3.9/distutils/command/install.py",start:663850,end:690655,audio:0},{filename:"/lib/python3.9/distutils/command/build.py",start:690655,end:696422,audio:0},{filename:"/lib/python3.9/distutils/command/command_template",start:696422,end:697055,audio:0},{filename:"/lib/python3.9/distutils/command/install_headers.py",start:697055,end:698353,audio:0},{filename:"/lib/python3.9/distutils/command/install_scripts.py",start:698353,end:700370,audio:0},{filename:"/lib/python3.9/distutils/command/sdist.py",start:700370,end:719375,audio:0},{filename:"/lib/python3.9/distutils/command/upload.py",start:719375,end:726972,audio:0},{filename:"/lib/python3.9/distutils/command/bdist_rpm.py",start:726972,end:748509,audio:0},{filename:"/lib/python3.9/distutils/command/clean.py",start:748509,end:751285,audio:0},{filename:"/lib/python3.9/distutils/command/check.py",start:751285,end:756922,audio:0},{filename:"/lib/python3.9/distutils/command/build_ext.py",start:756922,end:788557,audio:0},{filename:"/lib/python3.9/distutils/command/bdist_msi.py",start:788557,end:824136,audio:0},{filename:"/lib/python3.9/distutils/command/install_egg_info.py",start:824136,end:826739,audio:0},{filename:"/lib/python3.9/distutils/command/config.py",start:826739,end:839856,audio:0},{filename:"/lib/python3.9/distutils/command/install_data.py",start:839856,end:842678,audio:0},{filename:"/lib/python3.9/distutils/command/build_clib.py",start:842678,end:850700,audio:0},{filename:"/lib/python3.9/distutils/command/build_scripts.py",start:850700,end:856932,audio:0},{filename:"/lib/python3.9/distutils/command/build_py.py",start:856932,end:874122,audio:0},{filename:"/lib/python3.9/distutils/command/bdist.py",start:874122,end:879684,audio:0},{filename:"/lib/python3.9/distutils/command/bdist_wininst.py",start:879684,end:895714,audio:0},{filename:"/lib/python3.9/distutils/command/bdist_dumb.py",start:895714,end:900627,audio:0},{filename:"/lib/python3.9/distutils/command/install_lib.py",start:900627,end:909024,audio:0},{filename:"/lib/python3.9/distutils/command/register.py",start:909024,end:920736,audio:0},{filename:"/lib/python3.9/distutils/command/__init__.py",start:920736,end:921535,audio:0}],remote_package_size:516251,package_uuid:"7d5a6696-a2d1-47cd-94c6-07f691b3de4f"})})();