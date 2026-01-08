import { View, Text} from 'react-native'
import { useEffect } from 'react'
import { useAuth } from '../hooks/use-auth'

export default function App(){
    const { user, login  } = useAuth();

    useEffect(() => {
        login('emilys', 'emilypass');
    }, []);


    return(
        <View>
            <Text>{user?.firstName || 'Carregando...'}</Text>
        </View>
    )
}
