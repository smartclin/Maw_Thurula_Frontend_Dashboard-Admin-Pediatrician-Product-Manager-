import {
    Avatar,
    Box,
    Card,
    Icon,
    IconButton,
    MenuItem,
    Select,
    styled,
    Table,
    TableBody,
    TableCell,
    Button,
    TableHead,
    TableRow,
    useTheme,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';

const CardHeader = styled(Box)(() => ({
    display: 'flex',
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
    minWidth: 400,
    whiteSpace: 'pre',
    '& small': {
        width: 50,
        height: 15,
        borderRadius: 500,
        boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
    '& td': { borderBottom: 'none' },
    '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
    width: 50,
    height: 15,
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgcolor,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const AdminPostCommentMother = () => {
    const { palette } = useTheme();
    const bgError = palette.error.main;
    const bgPrimary = palette.primary.main;
    const bgSecondary = palette.secondary.main;

    return (
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader style={{ paddingLeft: 15}}>
                <Title style={{marginLeft:0}}>Comments Section</Title>

                {/*<Select size="small" defaultValue="this_month">*/}
                {/*  <MenuItem value="this_month">This Month</MenuItem>*/}
                {/*  <MenuItem value="last_month">Last Month</MenuItem>*/}
                {/*</Select>*/}
            </CardHeader>

            <Box overflow="auto">
                <ProductTable>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ px: 2 }} colSpan={2}>
                                Email
                            </TableCell>
                            <TableCell sx={{ px: 4 }} colSpan={4}>
                                Comments
                            </TableCell>
                            <TableCell sx={{ px: 3 }} colSpan={2}>
                                Date
                            </TableCell>

                            <TableCell sx={{ px: 2 }} colSpan={2}>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {productList.map((product, index) => (
                            <TableRow key={index} hover>
                                <TableCell align="left" colSpan={2} sx={{ px: 0,  }}>
                                    {product.email}
                                </TableCell>
                                <TableCell colSpan={4} align="left" sx={{ px: 0,  }}>
                                    <Box display="flex" justifyContent="flex-start" alignItems="flex-start" >
                                        <Paragraph sx={{ m: 0, ml: 4 }}>{product.comment}</Paragraph>
                                    </Box>
                                </TableCell>

                                <TableCell sx={{ px: 3 }} align="left" colSpan={2}>
                                    {product.date}
                                </TableCell>

                                <TableCell sx={{ px: 0 }} colSpan={2}>
                                    <IconButton>
                                        <Icon color="warning">delete_forever</Icon>
                                    </IconButton>
                                    <IconButton>
                                        <Icon color="primary">message</Icon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </ProductTable>
            </Box>
        </Card>
    );
};

const productList = [
    {
        email:'akila@gmaidfsdfsdsdfdsfsdfl.com',
        comment: 'A quality content with useful images.Wish to contact the author....',
        date:'2022/06/05',
        price: 100,
        available: 15,
    },
    {
        email:'akila@gmail.com',
        comment: 'very informative.Wish to contact the author...',
        price: 1500,
        available: 30,
        date:'2022/06/04',
    },
    {
        email:'akila@gmail.com',
        comment: 'Wish to contact the author,A quality content with useful images..',
        price: 1900,
        available: 35,
        date:'2022/06/03',
    },
    {
        email:'akila@gmail.com',
        comment: 'A quality content with useful images..',
        price: 100,
        available: 0,
        date:'2022/06/02',
    }
];

export default AdminPostCommentMother;
