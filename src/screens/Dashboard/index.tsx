import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'

import { 
    Container, 
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards
} from './styles'

export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/23580648?v=4'}}/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Rodrigo</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>
            
            <HighlightCards>
                <HighlightCard 
                    type="up"
                    title="Entradas"
                    amount="R$ 1.000,00"
                    lastTransaction="Última entrada"
                />
                <HighlightCard 
                    type="down"
                    title="Saída"
                    amount="R$ 5000,00"
                    lastTransaction="Última saída"
                />
                <HighlightCard
                    type="total"
                    title="Saldo"
                    amount="R$ 500,00"
                    lastTransaction="Valor atual"
                />
            </HighlightCards>
        </Container>
    )
}