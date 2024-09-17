var wms_layers = [];


        var lyr_EsriStreet_0 = new ol.layer.Tile({
            'title': 'Esri Street',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Zoo_Boundary_2 = new ol.format.GeoJSON();
var features_Zoo_Boundary_2 = format_Zoo_Boundary_2.readFeatures(json_Zoo_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoo_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoo_Boundary_2.addFeatures(features_Zoo_Boundary_2);
var lyr_Zoo_Boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoo_Boundary_2, 
                style: style_Zoo_Boundary_2,
                popuplayertitle: "Zoo_Boundary",
                interactive: false,
                title: '<img src="styles/legend/Zoo_Boundary_2.png" /> Zoo_Boundary'
            });
var format_TransparentView_3 = new ol.format.GeoJSON();
var features_TransparentView_3 = format_TransparentView_3.readFeatures(json_TransparentView_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransparentView_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransparentView_3.addFeatures(features_TransparentView_3);
var lyr_TransparentView_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransparentView_3, 
                style: style_TransparentView_3,
                popuplayertitle: "TransparentView",
                interactive: false,
                title: '<img src="styles/legend/TransparentView_3.png" /> TransparentView'
            });
var format_SolidView_4 = new ol.format.GeoJSON();
var features_SolidView_4 = format_SolidView_4.readFeatures(json_SolidView_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolidView_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolidView_4.addFeatures(features_SolidView_4);
var lyr_SolidView_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolidView_4, 
                style: style_SolidView_4,
                popuplayertitle: "SolidView",
                interactive: false,
                title: '<img src="styles/legend/SolidView_4.png" /> SolidView'
            });
var format_AnimalCages_5 = new ol.format.GeoJSON();
var features_AnimalCages_5 = format_AnimalCages_5.readFeatures(json_AnimalCages_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnimalCages_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnimalCages_5.addFeatures(features_AnimalCages_5);
var lyr_AnimalCages_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnimalCages_5, 
                style: style_AnimalCages_5,
                popuplayertitle: "AnimalCages",
                interactive: true,
                title: '<img src="styles/legend/AnimalCages_5.png" /> AnimalCages'
            });
var format_Route_6 = new ol.format.GeoJSON();
var features_Route_6 = format_Route_6.readFeatures(json_Route_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_6.addFeatures(features_Route_6);
var lyr_Route_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_6, 
                style: style_Route_6,
                popuplayertitle: "Route",
                interactive: false,
                title: '<img src="styles/legend/Route_6.png" /> Route'
            });

lyr_EsriStreet_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_Zoo_Boundary_2.setVisible(false);lyr_TransparentView_3.setVisible(true);lyr_SolidView_4.setVisible(true);lyr_AnimalCages_5.setVisible(true);lyr_Route_6.setVisible(true);
var layersList = [lyr_EsriStreet_0,lyr_GoogleSatellite_1,lyr_Zoo_Boundary_2,lyr_TransparentView_3,lyr_SolidView_4,lyr_AnimalCages_5,lyr_Route_6];
lyr_Zoo_Boundary_2.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Parameter': 'Parameter', 'Info': 'Info', });
lyr_TransparentView_3.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Parameter': 'Parameter', 'Info': 'Info', });
lyr_SolidView_4.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Parameter': 'Parameter', 'Info': 'Info', });
lyr_AnimalCages_5.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'Lat': 'Lat', 'Long': 'Long', 'Image': 'Image', });
lyr_Route_6.set('fieldAliases', {'id': 'id', 'Length': 'Length', 'Name': 'Name', 'Location': 'Location', 'Near_Place': 'Near_Place', });
lyr_Zoo_Boundary_2.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Parameter': 'TextEdit', 'Info': 'TextEdit', });
lyr_TransparentView_3.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Parameter': 'TextEdit', 'Info': 'TextEdit', });
lyr_SolidView_4.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Parameter': 'TextEdit', 'Info': 'TextEdit', });
lyr_AnimalCages_5.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Image': 'ExternalResource', });
lyr_Route_6.set('fieldImages', {'id': 'TextEdit', 'Length': 'TextEdit', 'Name': 'TextEdit', 'Location': 'TextEdit', 'Near_Place': 'TextEdit', });
lyr_Zoo_Boundary_2.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Parameter': 'inline label - always visible', 'Info': 'no label', });
lyr_TransparentView_3.set('fieldLabels', {'id': 'no label', 'Area': 'inline label - always visible', 'Parameter': 'no label', 'Info': 'no label', });
lyr_SolidView_4.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Parameter': 'no label', 'Info': 'no label', });
lyr_AnimalCages_5.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'hidden field', 'PopupInfo': 'no label', 'Lat': 'hidden field', 'Long': 'hidden field', 'Image': 'no label', });
lyr_Route_6.set('fieldLabels', {'id': 'no label', 'Length': 'no label', 'Name': 'no label', 'Location': 'no label', 'Near_Place': 'no label', });
lyr_Route_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});