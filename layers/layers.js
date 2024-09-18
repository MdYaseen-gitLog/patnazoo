var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
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
var format_SolidView_2 = new ol.format.GeoJSON();
var features_SolidView_2 = format_SolidView_2.readFeatures(json_SolidView_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolidView_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolidView_2.addFeatures(features_SolidView_2);
var lyr_SolidView_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolidView_2, 
                style: style_SolidView_2,
                popuplayertitle: "SolidView",
                interactive: false,
                title: '<img src="styles/legend/SolidView_2.png" /> SolidView'
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
var format_Zoo_Boundary_4 = new ol.format.GeoJSON();
var features_Zoo_Boundary_4 = format_Zoo_Boundary_4.readFeatures(json_Zoo_Boundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoo_Boundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoo_Boundary_4.addFeatures(features_Zoo_Boundary_4);
var lyr_Zoo_Boundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoo_Boundary_4, 
                style: style_Zoo_Boundary_4,
                popuplayertitle: "Zoo_Boundary",
                interactive: false,
                title: '<img src="styles/legend/Zoo_Boundary_4.png" /> Zoo_Boundary'
            });
var format_Lake_5 = new ol.format.GeoJSON();
var features_Lake_5 = format_Lake_5.readFeatures(json_Lake_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lake_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lake_5.addFeatures(features_Lake_5);
var lyr_Lake_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lake_5, 
                style: style_Lake_5,
                popuplayertitle: "Lake",
                interactive: false,
                title: '<img src="styles/legend/Lake_5.png" /> Lake'
            });
var format_Buildings_6 = new ol.format.GeoJSON();
var features_Buildings_6 = format_Buildings_6.readFeatures(json_Buildings_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_6.addFeatures(features_Buildings_6);
var lyr_Buildings_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_6, 
                style: style_Buildings_6,
                popuplayertitle: "Buildings",
                interactive: false,
                title: '<img src="styles/legend/Buildings_6.png" /> Buildings'
            });
var format_Track_7 = new ol.format.GeoJSON();
var features_Track_7 = format_Track_7.readFeatures(json_Track_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_7.addFeatures(features_Track_7);
var lyr_Track_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_7, 
                style: style_Track_7,
                popuplayertitle: "Track",
                interactive: false,
                title: '<img src="styles/legend/Track_7.png" /> Track'
            });
var format_Route_8 = new ol.format.GeoJSON();
var features_Route_8 = format_Route_8.readFeatures(json_Route_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_8.addFeatures(features_Route_8);
var lyr_Route_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_8, 
                style: style_Route_8,
                popuplayertitle: "Route",
                interactive: false,
                title: '<img src="styles/legend/Route_8.png" /> Route'
            });
var format_AnimalCages_9 = new ol.format.GeoJSON();
var features_AnimalCages_9 = format_AnimalCages_9.readFeatures(json_AnimalCages_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnimalCages_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnimalCages_9.addFeatures(features_AnimalCages_9);
var lyr_AnimalCages_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnimalCages_9, 
                style: style_AnimalCages_9,
                popuplayertitle: "AnimalCages",
                interactive: true,
                title: '<img src="styles/legend/AnimalCages_9.png" /> AnimalCages'
            });
var format_OtherFeatures_10 = new ol.format.GeoJSON();
var features_OtherFeatures_10 = format_OtherFeatures_10.readFeatures(json_OtherFeatures_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtherFeatures_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OtherFeatures_10.addFeatures(features_OtherFeatures_10);
var lyr_OtherFeatures_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OtherFeatures_10, 
                style: style_OtherFeatures_10,
                popuplayertitle: "OtherFeatures",
                interactive: false,
                title: '<img src="styles/legend/OtherFeatures_10.png" /> OtherFeatures'
            });

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_SolidView_2.setVisible(false);lyr_TransparentView_3.setVisible(true);lyr_Zoo_Boundary_4.setVisible(true);lyr_Lake_5.setVisible(true);lyr_Buildings_6.setVisible(true);lyr_Track_7.setVisible(true);lyr_Route_8.setVisible(true);lyr_AnimalCages_9.setVisible(true);lyr_OtherFeatures_10.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_SolidView_2,lyr_TransparentView_3,lyr_Zoo_Boundary_4,lyr_Lake_5,lyr_Buildings_6,lyr_Track_7,lyr_Route_8,lyr_AnimalCages_9,lyr_OtherFeatures_10];
lyr_SolidView_2.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Parameter': 'Parameter', 'Info': 'Info', });
lyr_TransparentView_3.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Parameter': 'Parameter', 'Info': 'Info', });
lyr_Zoo_Boundary_4.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Parameter': 'Parameter', 'Info': 'Info', });
lyr_Lake_5.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Name': 'Name', });
lyr_Buildings_6.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Parameter': 'Parameter', 'Info': 'Info', });
lyr_Track_7.set('fieldAliases', {'id': 'id', 'Length': 'Length', });
lyr_Route_8.set('fieldAliases', {'id': 'id', 'Length': 'Length', 'Name': 'Name', 'Location': 'Location', 'Near_Place': 'Near_Place', });
lyr_AnimalCages_9.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'Lat': 'Lat', 'Long': 'Long', 'Image': 'Image', });
lyr_OtherFeatures_10.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'Lat': 'Lat', 'Long': 'Long', 'Image': 'Image', });
lyr_SolidView_2.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Parameter': 'TextEdit', 'Info': 'TextEdit', });
lyr_TransparentView_3.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Parameter': 'TextEdit', 'Info': 'TextEdit', });
lyr_Zoo_Boundary_4.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Parameter': 'TextEdit', 'Info': 'TextEdit', });
lyr_Lake_5.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Name': 'TextEdit', });
lyr_Buildings_6.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Parameter': 'TextEdit', 'Info': 'TextEdit', });
lyr_Track_7.set('fieldImages', {'id': 'TextEdit', 'Length': 'TextEdit', });
lyr_Route_8.set('fieldImages', {'id': 'TextEdit', 'Length': 'TextEdit', 'Name': 'TextEdit', 'Location': 'TextEdit', 'Near_Place': 'TextEdit', });
lyr_AnimalCages_9.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Image': 'ExternalResource', });
lyr_OtherFeatures_10.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Image': 'TextEdit', });
lyr_SolidView_2.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Parameter': 'no label', 'Info': 'no label', });
lyr_TransparentView_3.set('fieldLabels', {'id': 'no label', 'Area': 'inline label - always visible', 'Parameter': 'no label', 'Info': 'no label', });
lyr_Zoo_Boundary_4.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Parameter': 'inline label - always visible', 'Info': 'no label', });
lyr_Lake_5.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Name': 'no label', });
lyr_Buildings_6.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Parameter': 'no label', 'Info': 'no label', });
lyr_Track_7.set('fieldLabels', {'id': 'no label', 'Length': 'no label', });
lyr_Route_8.set('fieldLabels', {'id': 'no label', 'Length': 'no label', 'Name': 'no label', 'Location': 'no label', 'Near_Place': 'no label', });
lyr_AnimalCages_9.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'hidden field', 'PopupInfo': 'no label', 'Lat': 'hidden field', 'Long': 'hidden field', 'Image': 'no label', });
lyr_OtherFeatures_10.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'PopupInfo': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Image': 'no label', });
lyr_OtherFeatures_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});