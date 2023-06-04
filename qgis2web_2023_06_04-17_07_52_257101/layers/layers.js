var wms_layers = [];

var format_MDB_District_Municipal_Boundary_2018_0 = new ol.format.GeoJSON();
var features_MDB_District_Municipal_Boundary_2018_0 = format_MDB_District_Municipal_Boundary_2018_0.readFeatures(json_MDB_District_Municipal_Boundary_2018_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MDB_District_Municipal_Boundary_2018_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MDB_District_Municipal_Boundary_2018_0.addFeatures(features_MDB_District_Municipal_Boundary_2018_0);
var lyr_MDB_District_Municipal_Boundary_2018_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MDB_District_Municipal_Boundary_2018_0, 
                style: style_MDB_District_Municipal_Boundary_2018_0,
                interactive: true,
    title: 'MDB_District_Municipal_Boundary_2018<br />\
    <img src="styles/legend/MDB_District_Municipal_Boundary_2018_0_0.png" /> BUF<br />\
    <img src="styles/legend/MDB_District_Municipal_Boundary_2018_0_1.png" /> DC10<br />\
    <img src="styles/legend/MDB_District_Municipal_Boundary_2018_0_2.png" /> DC12<br />\
    <img src="styles/legend/MDB_District_Municipal_Boundary_2018_0_3.png" /> DC13<br />\
    <img src="styles/legend/MDB_District_Municipal_Boundary_2018_0_4.png" /> DC14<br />\
    <img src="styles/legend/MDB_District_Municipal_Boundary_2018_0_5.png" /> DC15<br />\
    <img src="styles/legend/MDB_District_Municipal_Boundary_2018_0_6.png" /> DC44<br />\
    <img src="styles/legend/MDB_District_Municipal_Boundary_2018_0_7.png" /> NMA<br />\
    <img src="styles/legend/MDB_District_Municipal_Boundary_2018_0_8.png" /> <br />'
        });

lyr_MDB_District_Municipal_Boundary_2018_0.setVisible(true);
var layersList = [lyr_MDB_District_Municipal_Boundary_2018_0];
lyr_MDB_District_Municipal_Boundary_2018_0.set('fieldAliases', {'FID': 'FID', 'PROVINCE': 'PROVINCE', 'DISTRICT': 'DISTRICT', 'DISTRICT_N': 'DISTRICT_N', 'DATE': 'DATE', 'CATEGORY': 'CATEGORY', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_MDB_District_Municipal_Boundary_2018_0.set('fieldImages', {'FID': 'Range', 'PROVINCE': 'TextEdit', 'DISTRICT': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DATE': 'DateTime', 'CATEGORY': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_MDB_District_Municipal_Boundary_2018_0.set('fieldLabels', {'FID': 'no label', 'PROVINCE': 'no label', 'DISTRICT': 'no label', 'DISTRICT_N': 'no label', 'DATE': 'no label', 'CATEGORY': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_MDB_District_Municipal_Boundary_2018_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});