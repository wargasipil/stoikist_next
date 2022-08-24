import { Box, FormControl, Input, InputGroup, InputRightElement, IconButton, Breadcrumb, BreadcrumbItem, BreadcrumbLink, List, ListItem, useDisclosure, Modal, Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, FormLabel, Divider, Text, ListIcon, Select, VStack, HStack } from '@chakra-ui/react';
import { MdAdd, MdArrowForwardIos, MdDelete } from 'react-icons/md'
import { AiTwotoneEdit } from 'react-icons/ai'
import Navbar from "../components/Navbar"
import { CreateCategoryPayload } from '../payload/category'
import { useState, useEffect, useCallback } from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'


interface Category {
    id: number
    name: string
    parent_id: number
}


async function createCategory(payload: CreateCategoryPayload): Promise<Category> {
    const res = await fetch('/api/category', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'content-type': 'application/json'
        }
    })

    const data = await res.json()
    return data 
}

async function deleteCategory(catid: number){
    const url = `/api/category/${catid}`
    await fetch(url, {
        method: 'DELETE'
    })
}


async function getCategory(): Promise<Category[]> {
    const res = await fetch('/api/category', {
        method: 'GET'
    })
    const categories = await res.json()
    return categories as Category[]
}


export interface CatProp {
    parent_id: number
    catChange: (category: Category) => void
    value?: number
}

const categoriesState = atom<Category[]>({
    key: 'categoriesListState',
    default: []

})


function CategoryItem(prop: CatProp){
    const { parent_id, value, catChange } = prop
    const [newcat, setNewCat ] = useState<string>()
    const [ categories, setCategories ] = useRecoilState(categoriesState)

    const listCategories = categories.filter(categ => categ.parent_id === parent_id)

    const selectCateg = useCallback((catid: number) => {
        const categs = listCategories.filter(cat => cat.id === catid)
        if(categs){
            catChange(categs[0])
        }
    }, [listCategories, catChange])

    const deleteCateg = useCallback(async () => {

        await deleteCategory(value as number)
        setCategories(categories => {
            return categories.filter(cat => cat.id !== value)
        })
    }, [value, setCategories])

    const addCateg = useCallback(async () => {
        const categ = await createCategory({
            name: newcat || '',
            parent_id: parent_id
        })

        setCategories(items => {
            return [...items, categ]
        })
        setNewCat('')

    }, [newcat, setCategories, parent_id])

    useEffect(() => {
        getCategory().then(datas => {
            setCategories(datas)
        })
    }, [setCategories])

    return <FormControl>
        
        <InputGroup size="sm">
            <Input
                value={newcat}
                onChange={e => setNewCat(e.target.value)}
                placeholder='new category' />
            <InputRightElement>
                <IconButton
                    onClick={addCateg}
                    size="sm"
                    variant="ghost"
                    icon={<MdAdd />}
                    aria-label='add category'/>
            </InputRightElement>
        </InputGroup>
        <Box mt="2">
        <InputGroup size="sm">
            <Select 
                value={value} 
                onChange={e => selectCateg(Number(e.target.value))}
                size="sm" placeholder='Select option'>
                {listCategories.map(categ => {
                    return <option
                            key={categ.id} 
                            value={categ.id}
                        >{categ.name}</option>
                })} 
            </Select>

            <IconButton
                onClick={deleteCateg}
                size="sm"
                colorScheme="red"
                variant="ghost"
                icon={<MdDelete />}
                aria-label='delete category'/>
        </InputGroup>
            

            
        </Box>
    </FormControl>
}

export interface CategoryGroupProp {
    valueCat: Category[]
    categoryChange: (categs: Category[]) => void
}

export default function CategoryGroup(props: CategoryGroupProp) {
    const { valueCat, categoryChange } = props
    const { isOpen, onOpen, onClose } = useDisclosure()

    const updateCateg = useCallback((categ: Category, index: number) => {
        categoryChange([...valueCat.filter((value, ind) => ind < index), categ])
    }, [categoryChange, valueCat])

    let lstParentId = 0
    if(valueCat.length > 0){
        lstParentId = valueCat[valueCat.length -1].id
    }

    return (
    <>
    
    
    <Box>
        { valueCat.length === 0 && <span>Select Category</span>}

        {
            valueCat.map(categ => {
                return <span key={categ.id}>{categ.name} - </span>
            })
        }

        <IconButton onClick={onOpen} icon={<AiTwotoneEdit />} size="sm" variant="ghost" aria-label='select category'/>
        
        
    </Box>



    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Select Category</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                
            <HStack>
                { 
                    valueCat.map((categ, index) => {
                        return <CategoryItem
                            catChange={(categ) => updateCateg(categ, index)}
                            key={categ.id}
                            value={categ.id}
                            parent_id={valueCat[index - 1]?.id || 0}
                        />
                    }) 
                }

                <CategoryItem
                    parent_id={lstParentId}
                    value={0}
                    catChange={(categ) => updateCateg(categ, valueCat.length)}
                />
            </HStack>
            
            </ModalBody>
        </ModalContent>
    </Modal>


    </>
    )
}
