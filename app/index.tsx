import { View, Text} from 'react-native'
import { useAuth } from '../hooks/use-auth'

export default function App(){
    const { user, login  } = useAuth();

    login('emilys', 'emilypass');

    
    return(
        <View>
            <Text>{user?.firstName || 'Carregando...'}</Text>
        </View>
    )
}
