import { GridItemType } from '../../types/GridItemType'
import * as C from './styles'
import cowModel from '../../svgs/cow1.svg'
import { items } from '../../data/items'

type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridItem = ({ item, onClick }: Props) => {
    return (
        <C.Container showBackground={item.permanentShown || item.shown} onClick={onClick}>
            {!item.permanentShown && !item.shown &&
                <C.Icon src={cowModel} alt="" opacity={.3} />
            }

            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt="" />
            }
        </C.Container>
    )
}