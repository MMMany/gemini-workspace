import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const techStack = [
  { name: 'Vite', desc: '초고속 번들러 및 개발 서버' },
  { name: 'React 18', desc: 'UI 컴포넌트 라이브러리 (JavaScript)' },
  { name: 'MUI (Material UI)', desc: '구글 머티리얼 디자인 UI 컴포넌트' },
  { name: 'React Router v6', desc: '클라이언트 사이드 라우팅' },
  { name: 'React Hook Form (RHF)', desc: '성능 최적화된 폼 상태 관리 및 검증' },
  { name: 'ESLint & Prettier', desc: '코드 품질 검사 및 일관된 코드 포맷팅' },
];

function HomePage() {
  return (
    <Box>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          프론트엔드 프로젝트 초기 세팅
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Vite, React, MUI, React Router, React Hook Form 기반의 샘플
          애플리케이션입니다.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/form"
            endIcon={<ArrowForwardIcon />}
            size="large"
          >
            RHF 폼 샘플 체험하기
          </Button>
        </Box>
      </Box>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
        적용된 기술 스택
      </Typography>
      <Grid container spacing={2}>
        {techStack.map((tech) => (
          <Grid item xs={12} sm={6} md={4} key={tech.name}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CheckCircleOutlineIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6" component="div">
                    {tech.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {tech.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HomePage;
