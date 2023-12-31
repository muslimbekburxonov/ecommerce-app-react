import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import CategoryContent from "../../components/CategoryContent";
import CategoryHeader from "../../components/CategoryHeader";
import { getCategoryId } from "../../helpers/getCategoryId";
import { searchCategoryById } from "../../helpers/searchCategoryById";

const CategoryPage = () => {
  const { categories } = useSelector((state) => state.category);

  const { slug } = useParams();
  const id = getCategoryId(slug);

  const category = searchCategoryById(id, categories);

  return (
    <main>
      <div className="category-page">
        <div className="container">
          <Breadcrumb pathList={category.path} />
          <CategoryHeader />
          <CategoryContent />
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;