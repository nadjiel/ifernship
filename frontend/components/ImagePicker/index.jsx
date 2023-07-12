import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const App = () => {
    const [imageSource, setImageSource] = useState(null);

    const selectImage = () => {
        ImagePicker.showImagePicker(
            {
                title: 'Selecione uma imagem',
                cancelButtonTitle: 'Cancelar',
                chooseFromLibraryButtonTitle: 'Escolher da biblioteca',
                takePhotoButtonTitle: 'Tirar foto',
                mediaType: 'photo',
                quality: 1,
                maxWidth: 800,
                maxHeight: 800,
            },
            (response) => {
                if (!response.didCancel && !response.error) {
                    setImageSource(response.uri);
                }
            }
        );
    };

    return (
        <View>
            <Button title="Selecionar imagem" onPress={selectImage} />
            {imageSource && <Image source={{ uri: imageSource }} style={{ width: 200, height: 200 }} />}
        </View>
    );
};

export default App;
